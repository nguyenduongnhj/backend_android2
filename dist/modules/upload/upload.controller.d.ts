/// <reference types="multer" />
import { UsersService } from 'src/services/users/users.service';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
export declare class UploadController {
    private usersService;
    constructor(usersService: UsersService);
    uploadImageFile(file: any): Promise<ResponseSuccess>;
    uploadAvatar(req: any, userId: string, file: any): Promise<ResponseSuccess>;
    uploadAvatarInvestor(req: any, userId: string, file: any): Promise<ResponseSuccess>;
    uploadMultipleFiles(files: Array<Express.Multer.File>): Promise<ResponseSuccess>;
}
