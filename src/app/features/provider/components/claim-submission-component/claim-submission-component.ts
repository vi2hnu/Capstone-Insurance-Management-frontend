import { Component, inject, Input, OnInit } from '@angular/core';
import { ClaimService } from '../../../../core/service/claim/claim-service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-claim-submission-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './claim-submission-component.html',
  styleUrl: './claim-submission-component.css',
})
export class ClaimSubmissionComponent implements OnInit {
  @Input() customerId!: string;
  @Input() policyId!: string | null;
  claimService = inject(ClaimService);
  private route = inject(ActivatedRoute);

  planId!: string;
  hospitalId!: string;
  selectedFile: File | null = null;
  uploadedDocument = '';
  requestedAmount: number | null = null;
  errorMessage = '';
  successMessage = '';

  ngOnInit(): void {
    this.planId = this.route.snapshot.paramMap.get('id')!;
    const hospital = localStorage.getItem('hospital');
    if (!hospital) {
      console.error('Hospital not found in localStorage');
      return;
    }
    this.hospitalId = JSON.parse(hospital).id;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files.length) return;
    this.selectedFile = input.files[0];
  }

  upload() {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file';
      return;
    }
    this.claimService.uploadDocument(this.selectedFile).subscribe({
      next: (res) => {
        this.uploadedDocument = res;
        this.successMessage = 'Document uploaded successfully';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Upload failed';
        this.successMessage = '';
      },
    });
  }

  submitClaim() {
    if (!this.customerId || !this.hospitalId || !this.policyId || !this.requestedAmount || !this.uploadedDocument) {
      this.errorMessage = 'All fields are required';
      return;
    }
    const hospitalIdNum = Number(this.hospitalId)
    this.claimService.providerAddClaim({
      userId: this.customerId,
      hospitalId: hospitalIdNum,
      policyId: this.policyId,
      requestedAmount: this.requestedAmount,
      supportingDocument: this.uploadedDocument,
    }).subscribe({
      next: () => {
        this.successMessage = 'Claim submitted successfully';
        this.errorMessage = '';
        this.resetForm();
      },
      error: () => {
        this.errorMessage = 'Failed to submit claim';
        this.successMessage = '';
      },
    });
  }

  resetForm() {
    this.selectedFile = null;
    this.uploadedDocument = '';
    this.requestedAmount = null;
  }
}
