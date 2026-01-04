export interface ClaimModel {
  id: number;
  policyId: number;
  userId: string;
  hospitalId: number;
  requestedAmount: number;
  supportingDocument: string;
  claimRequestDate: string;
  stage: string;
  status: string;
  providerReview: ClaimReview | null;
  claimsOfficerReview: ClaimReview | null;
}

export interface ClaimReview {
  id: number;
  reviewerRole: string;
  userId: string;
  reviewStatus: string;
  comments: string;
  reviewDate: string;
}


export interface ClaimRequest {
  policyId: string;
  userId: string;
  hospitalId: number;
  requestedAmount: number;
  supportingDocument: string;
}
