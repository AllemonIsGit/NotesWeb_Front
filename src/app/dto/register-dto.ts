export class RegisterDTO {
  constructor(
    email: string,
    public username: string,
    password: string,
    rePassword: string
  ) {}
}
