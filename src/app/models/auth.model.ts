export interface FormLogin {
  username: string;
  password: string;
  system: 'admin' | 'customer';
  save: boolean;
}

export interface ResponseLogin {
  authenticationCode: string;
  user: User;
}

export interface User {
  avatar: string;
  fullname: string;
  permissions: Record<string, any>[];
}

export type AccountType = 'organization' | 'person';

export interface FormRegister {
  fullname: string;
  password: string;
  phone: string;
  email: string;
  type: AccountType;
}

export interface PayloadResetPassword {
  password: string;
  verifyToken: string;
}

export interface PayloadChangePassword {
  password: string;
  newPassword: string;
}

export interface PayloadVerifyBankAccount {
  bankId: number;
  accountNumber: string;
  accountHolder: string;
  bankBranch: string;
}

export interface PayloadVerifyLegal {
  typeIdentificationId: 0;
  number: string;
  issuedBy: string;
  issuedDate: string;
  frontSide: string;
  backSide: string;
}
