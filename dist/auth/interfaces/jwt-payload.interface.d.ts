export interface JwtPayload {
    readonly email: string;
    readonly sub: string;
    readonly username: string;
    readonly roles: Array<string>;
}
