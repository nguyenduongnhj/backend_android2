import {
    Body,
    Controller,
    Get,
    Post,
    ConflictException,
    HttpCode,
    Param,
    Request,
    UseGuards,
    HttpException,
    BadRequestException
} from '@nestjs/common';

/* Services */
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/services/users/users.service';
import { MailerService } from 'src/modules/mailer/mailer.service';

/* Interfaces */
import { IResponse } from 'src/commons/interfaces/response.interface';

/* Guards */
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

/* Dtos */
import { ChangePasswordDto } from './dtos/change-password.dto';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
import { ResponseSuccess, ResponseError } from 'src/commons/dtos/response.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
        private readonly mailerService: MailerService,
    ) { }

}
