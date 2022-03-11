import { Observable } from 'rxjs';

export interface PayloadProfileUpdate {
  fullname: string;
  birthday: string | null;
  phone: string;
  address: string | null;
}

export interface UserProfile extends PayloadProfileUpdate {
  accountType: string;
  accountVerification: boolean;
  emailVerification: boolean;
  phoneVerification: boolean;
  email: string;
  bankId: number;
  accountNumber: string;
  accountHolder: string;
  bankBranch: string;
  typeIdentificationId: 0;
  number: string;
  issuedBy: string;
  issuedDate: string;
  frontSide: string;
  backSide: string;
}

export interface ErrorUpdateUserProfile {
  code: string;
  error: Record<string, any>;
  message: string;
  statusCode: number;
}

export interface NavigationVerify {
  title: string;
  path: string;
  verified: Observable<boolean>;
}

export interface ResponseUploadFile {
  path: string;
}
