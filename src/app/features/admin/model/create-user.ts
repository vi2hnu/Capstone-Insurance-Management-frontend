export interface CreateUser {
  name: string;
  username: string;
  email: string;
  role: 'ADMIN' | 'INSURANCE_AGENT' | 'CLAIMS_OFFICER' | 'HOSPITAL' | 'CUSTOMER';
  gender: 'MALE' | 'FEMALE' | 'OTHER';
}
