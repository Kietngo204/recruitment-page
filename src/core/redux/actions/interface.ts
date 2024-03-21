export interface CredentialsLogin {
  email: string;
  password: string;
}

export interface CredentialsRegister extends CredentialsLogin {
  photoURL: string;
  displayName: string;
}
