import { HttpException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/services/users/users.service';
import { IResponse } from 'src/commons/interfaces/response.interface';
import { ChangePasswordDto } from './dtos/change-password.dto';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(data: any): Promise<IResponse>;
    register(data: CreateUserDto): Promise<IResponse | HttpException>;
    changePassword(req: any, data: ChangePasswordDto): Promise<IResponse>;
    checkUsername(data: any): Promise<IResponse>;
}
