export interface PlolicyModel {
  id: number;
  userId: string;
  startDate: string;
  endDate: string;
  status: string;
  remainingCoverage: number;
  renewalCounter: number;
  agentId: string | null;
  plan: PlanModel;
}


export interface PlanModel {
  id: number;
  name: string;
  description: string;
  premiumAmount: number;
  coverageAmount: number;
  duration: number;
  status: string;
}
