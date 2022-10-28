import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../services/users/users.service';
import { User } from 'src/database/models/user.model';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(user: any): Promise<any>;
    createAccessToken(user: User): Promise<{
        expires_in: number;
        access_token: string;
    }>;
    hashPassword(password: string): Promise<string | null>;
    comparePassword(password: string, hashPassword: string): Promise<boolean>;
    username(username: string): Promise<any>;
    register(data: CreateUserDto): Promise<{
        expires_in: number;
        access_token: string;
        user: User;
    }>;
    changePassword(userId: String, oldPass: string, newPass: string): Promise<boolean>;
}
