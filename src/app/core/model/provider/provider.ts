export interface HospitalNetworkModel {
  id: number;
  planId: number;
  networkType: string;
  hospital: Hospital;
}

export interface Hospital {
  id: number;
  hospitalName: string;
  cityName: string;
  phoneNumber: string;
  email: string;
}
