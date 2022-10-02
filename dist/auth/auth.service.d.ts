import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../services/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    hashPassword(password: string): Promise<string | null>;
    comparePassword(password: string, hashPassword: string): Promise<boolean>;
    username(username: string): Promise<any>;
}
