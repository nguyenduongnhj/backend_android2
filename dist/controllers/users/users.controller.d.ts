import { HttpException } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { IResponse } from 'src/commons/interfaces/response.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(data: any): Promise<ResponseSuccess>;
    updateUser(userId: string, data: any): Promise<ResponseSuccess>;
    getMoneyAndPoint(userId: string): Promise<IResponse | HttpException>;
}
