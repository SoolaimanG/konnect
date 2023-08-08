//Different Types from here to avoid recreating user types

export interface User {
  username: string;
  email: string;
  image?: string;
  emailVerified?: boolean;
  resetPassword?: [
    {
      requestPassword: boolean;
      expires: number;
      lastRequest: number;
      id: string;
    }
  ];
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  firstTimeLogin?: boolean;
}
