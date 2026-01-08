import { Component, Input, inject, NgZone } from '@angular/core';
import { PlolicyModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { Roleservice } from '../../../../core/service/roleservice';
import { UserService } from '../../../../core/service/user/user-service';
import { Billing } from '../../service/billing'; 
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { ConformationComponent } from '../../../../shared/component/conformation-component/conformation-component';

@Component({
  selector: 'app-enrolled-policy-card',
  standalone: true,
  imports: [ConformationComponent], 
  templateUrl: './enrolled-policy-card.html',
  styleUrl: './enrolled-policy-card.css',
})
export class EnrolledPolicyCard {
  @Input() policy!: PlolicyModel;
  @Input() userId!: string;

  private readonly enrollmentService = inject(EnrollmentService);
  private readonly roleService = inject(Roleservice);
  private readonly userService = inject(UserService);
  private readonly billingService = inject(Billing); 
  private ngZone = inject(NgZone); 
  private readonly router = inject(Router);

  successMessage = '';
  errorMessage = '';
  isProcessing = false;
  showConfirmation = false;

  private buildRequest() {
    const role = this.roleService.getRole();

    const request: any = {
      userId: this.userId,
      policyId: this.policy.id,
    };

    if (role === 'INSURANCE_AGENT') {
      request.agentId = this.userService.getUserId();
    }

    return request;
  }

  renew(): void {
    this.successMessage = '';
    this.errorMessage = '';
    
    const role = this.roleService.getRole();

    if (role === 'INSURANCE_AGENT') {
      this.isProcessing = true;
      this.executeRenewal();
      return;
    }

    this.isProcessing = true;
    this.billingService
      .createOrder(this.userId, this.policy.plan.premiumAmount,'POLICY_RENEWAL')
      .subscribe({
        next: (response) => this.openTransactionModal(response),
        error: () => {
          this.isProcessing = false;
          this.errorMessage = 'Failed to initiate payment for renewal.';
        }
      });
  }

  openTransactionModal(response: any) {
    const options = {
      order_id: response.orderId,
      key: environment.razorpayKey,
      amount: response.amount,
      currency: response.currency,
      name: 'Smart health insurance company',
      description: 'Policy Renewal',
      image: '',
      handler: (resp: any) => {
        this.ngZone.run(() => {
          this.processResponse(resp);
        });
      },
      modal: {
        ondismiss: () => {
          this.ngZone.run(() => {
            this.isProcessing = false;
            this.errorMessage = 'Payment cancelled';
          });
        }
      },
      prefill: {
        name: "insurance",
        email: "contact@gmail.com",
        contact: '9999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }

  processResponse(resp: any) {
    const paymentVerificationRequest = {
      razorpayOrderId: resp.razorpay_order_id,
      razorpayPaymentId: resp.razorpay_payment_id,
      razorpaySignature: resp.razorpay_signature
    };

    this.billingService.verifyPayment(paymentVerificationRequest).subscribe({
      next: () => {
        this.executeRenewal();
      },
      error: (err) => {
        console.error('Payment verification failed:', err);
        this.isProcessing = false;
        this.errorMessage = 'Payment verification failed';
      }
    });
  }

  executeRenewal(): void {
    this.enrollmentService.renewPolicy(this.buildRequest())
      .subscribe({
        next: (policy) => {
          this.policy = policy;
          this.successMessage = 'Policy renewed successfully';
          this.errorMessage = '';
          this.isProcessing = false;
        },
        error: () => {
          this.errorMessage = 'Failed to renew policy.';
          this.isProcessing = false;
        }
      });
  }

  cancel(): void {
    this.showConfirmation = true;
  }

  confirmCancellation(): void {
    this.showConfirmation = false;
    this.enrollmentService.cancelPolicy(this.buildRequest())
      .subscribe({
        next: () => {
          this.policy.status = 'CANCELLED';
          this.successMessage = 'Policy cancelled successfully';
          this.errorMessage = '';
        },
        error: () => {
          this.errorMessage = 'Failed to cancel policy.';
        }
      });
  }

  closePopup(): void {
    this.showConfirmation = false;
  }

  claim(): void {
    const role = this.roleService.getRole();

    this.router.navigate(
      ['claim/make/claim'],
      {
        state: {
          policyId: this.policy.id,
          planId: this.policy.plan.id,
          customerId: role === 'INSURANCE_AGENT' ? this.userId : null,
        },
      }
    );
  }
}