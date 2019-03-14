export class Login {
  public login: string;
  public email?: string;
  public password: string;
  public rememberUser?: boolean;
}

export class LoginResponse {
  public acess_token: string;
  public refresh_token: string;
}
