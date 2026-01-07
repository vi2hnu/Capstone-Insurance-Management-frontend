import { Component, inject, Input } from '@angular/core';
import { ClaimService } from '../../service/claim-service';
import { UserService } from '../../../../core/service/user/user-service';
import { ClaimRequest } from '../../model/claim-request-model';
import { FormsModule } from '@angular/forms';
import { HospitalNetworkModel } from '../../../../core/model/provider/provider';
import { Roleservice } from '../../../../core/service/roleservice';

@Component({
  selector: 'app-claim-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './claim-form-component.html',
  styleUrl: './claim-form-component.css',
})
export class ClaimFormComponent {
  @Input() policyId: string = '';
  @Input() customerId!: string;
  @Input() hospitals: HospitalNetworkModel[] = [];

  private readonly claimService = inject(ClaimService);
  private readonly roleService = inject(Roleservice);
  private readonly userService = inject(UserService);

  selectedFile: File | null = null;
  uploadedDocument: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  hospitalId: number | null = null;
  requestedAmount: number | null = null;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    this.selectedFile = input.files[0];
  }

  upload() {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file';
      return;
    }
    this.claimService.uploadDocument(this.selectedFile).subscribe({
      next: (response) => {
        this.uploadedDocument = response;
        this.errorMessage = '';
        this.successMessage = 'Document uploaded successfully!';
      },
      error: () => {
        this.errorMessage = 'Upload failed';
        this.successMessage = '';
      },
    });
  }

  buildClaimRequest(): ClaimRequest | null {
    const userId = this.customerId;
    if (!userId || !this.hospitalId || !this.requestedAmount || !this.policyId || !this.uploadedDocument) {
      this.errorMessage = 'All fields are required. Please fill in all fields and upload a document.';
      return null;
    }

    const request: ClaimRequest = {
      policyId: this.policyId,
      userId: userId,
      hospitalId: this.hospitalId,
      requestedAmount: this.requestedAmount,
      supportingDocument: this.uploadedDocument,
    };

    if (this.roleService.getRole() === 'INSURANCE_AGENT') {
      const agentId = this.userService.getUserId();
      if (agentId) {
        request.agentId = agentId;
      }
    }

    return request;
  }


  submitClaim() {
    this.successMessage = '';
    this.errorMessage = '';

    const request = this.buildClaimRequest();
    if (!request) {
      return;
    }

    this.claimService.addClaim(request).subscribe({
      next: () => {
        this.errorMessage = '';
        this.successMessage = 'Claim submitted successfully! Your claim is now being processed.';
        this.resetForm();
      },
      error: (err) => {
        if(err.status===400){
          this.errorMessage = 'Invalid claim form please check all fields';
        this.successMessage = '';
        }
        else{
          this.errorMessage = 'Failed to submit claim. Please try again.';
        this.successMessage = '';
        }
      },
    });
  }

  resetForm() {
    this.selectedFile = null;
    this.uploadedDocument = '';
    this.hospitalId = null;
    this.requestedAmount = null;
  }
}