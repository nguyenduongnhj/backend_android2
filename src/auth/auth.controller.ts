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
    ) { }


    @Post('login')
    @HttpCode(200)
    async login(@Body() data: any): Promise<IResponse> {
        return new ResponseSuccess("AUTH.LOGIN.USER_LOGIN_SUCCESSFULLY", await this.authService.login(data));
    }


    @Post('register')
    @HttpCode(200)
    async register(@Body() data: CreateUserDto): Promise<IResponse | HttpException> {
        /* check extist user */
        console.log(data);
        const userExistsByUsername = await this.usersService.existsByUsername(data.user_name);
        if (userExistsByUsername) {
            throw new ConflictException('AUTH.REGISTER.CONFLICT_USERNAME');
        }

        const userExistsByEmail = await this.usersService.existsByEmail(data.email);
        if (userExistsByEmail) {
            throw new ConflictException('AUTH.REGISTER.CONFLICT_EMAIL');
        }

        if (data.phone_number) {
            const userExistsByPhoneNumber = await this.usersService.existsByPhoneNumber(data.phone_number);
            if (userExistsByPhoneNumber) {
                throw new ConflictException('AUTH.REGISTER.CONFLICT_PHONENUMBER');
            }
        }
        /********/
        try {
            await this.authService.register(data);


            return new ResponseSuccess("AUTH.REGISTER.SUCCESSFULLY");
        } catch (error) {
            throw new BadRequestException('AUTH.REGISTER.FAILED');
        }
    }


    @UseGuards(JwtAuthGuard)
    @Post('change_password')
    @HttpCode(200)
    async changePassword(@Request() req: any, @Body() data: ChangePasswordDto): Promise<IResponse> {
        let user = req.user;
        let { old_pass, new_pass } = data;

        if (await this.authService.changePassword(user.id, old_pass, new_pass)) {
            return new ResponseSuccess("AUTH.CHANGE_PASSWORD.SUCCESSFULLY");
        }

        return new ResponseError("AUTH.CHANGE_PASSWORD.FAILED");
    }


}
