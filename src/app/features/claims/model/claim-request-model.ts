export interface ClaimRequest {
  policyId: string;
  userId: string;
  hospitalId: number;
  requestedAmount: number;
  supportingDocument: string;
}
