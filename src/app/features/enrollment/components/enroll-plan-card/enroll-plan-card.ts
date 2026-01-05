import { Component, Input, inject, NgZone } from '@angular/core';
import { PlanModel } from '../../../../core/model/policy/plolicy-model';
import { EnrollmentService } from '../../service/enrollment-service';
import { Roleservice } from '../../../../core/service/roleservice';
import { UserService } from '../../../../core/service/user/user-service';
import { Billing } from '../../service/billing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll-plan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enroll-plan-card.html',
  styleUrl: './enroll-plan-card.css',
})
export class EnrollPlanCard {
  @Input() plan!: PlanModel;
  @Input() userId!: string;
  
  private enrollmentService = inject(EnrollmentService);
  private roleService = inject(Roleservice);
  private userService = inject(UserService);
  private billingService = inject(Billing);
  private ngZone = inject(NgZone);
  
  successMessage = '';
  errorMessage = '';
  isProcessing = false; 

  enroll(): void {
    this.errorMessage = '';
    this.successMessage = '';
    
    if (!this.userId) {
      this.errorMessage = 'Invalid user';
      return;
    }

    const role = this.roleService.getRole();
    const request: any = {
      userId: this.userId,
      planId: this.plan.id
    };

    if (role === 'INSURANCE_AGENT') {
      const agentId = this.userService.getUserId();
      if (!agentId) {
        this.errorMessage = 'Invalid agent';
        return;
      }
      request.agentId = agentId;
      this.enrollPolicy(request);
      return;
    }

    this.isProcessing = true;
    this.billingService
      .createOrder(this.userId, this.plan.premiumAmount)
      .subscribe({
        next: (response) => this.openTransactionModal(response),
        error: () => {
          this.isProcessing = false;
          this.errorMessage = 'Failed to create payment order';
        }
      });
  }

  openTransactionModal(response: any) {
    const options = {
      order_id: response.orderId,
      key: "rzp_test_RyB1uzTAASmWLT",
      amount: response.amount,
      currency: response.currency,
      name: 'Smart health insurance company',
      description: 'Enroll under plan',
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
      notes: {
        address: "insurance company"
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
        this.enrollPolicy({
          userId: this.userId,
          planId: this.plan.id
        });
      },
      error: (err) => {
        console.error('Payment verification failed:', err);
        this.isProcessing = false;
        this.errorMessage = 'Payment verification failed';
      }
    });
  }

  private enrollPolicy(request: any) {
    this.enrollmentService.enrollPlan(request).subscribe({
      next: () => {
        this.isProcessing = false;
        this.successMessage = 'Enrollment success';
        console.log('Enrollment successful!');
      },
      error: (err) => {
        console.error('Enrollment failed:', err);
        this.isProcessing = false;
        this.errorMessage = 'Failed to enroll. Please try again.';
      }
    });
  }
}