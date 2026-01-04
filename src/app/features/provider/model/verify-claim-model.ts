export interface VerifyClaimModel {
  providerId: string;
  claimId: number;
  status: 'APPROVED' | 'REJECTED';
  comments: string;
}
