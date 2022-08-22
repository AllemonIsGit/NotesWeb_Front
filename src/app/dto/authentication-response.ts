export class AuthenticationResponse {
    constructor(public token: string, public username: string, public email: string) {}
}