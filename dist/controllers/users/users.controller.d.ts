import { UsersService } from 'src/services/users/users.service';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(data: any): Promise<ResponseSuccess>;
    updateUser(userId: string, data: any): Promise<ResponseSuccess>;
}
