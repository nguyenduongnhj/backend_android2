import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
    Request,
    Put,
    Param,
    BadRequestException,
    HttpException,
    HttpCode,
    NotFoundException
} from '@nestjs/common';

import { UsersService } from 'src/services/users/users.service';
import {
    ResponseError,
    ResponseSuccess,
    ResponsePaginationSuccess
} from 'src/commons/dtos/response.dto';

import { IResponse } from 'src/commons/interfaces/response.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@Controller('v1/users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) { }

    @Post('create')
    @HttpCode(200)
    async createUser(@Body() data: any) {
        try {
            await this.usersService.create(data);
            return new ResponseSuccess("USER.REGISTER.SUCCESSFULLY");
        } catch (error) {
            console.log(error)
            throw new ResponseError('USER.REGISTER.FAILED', error);
        }
    }

    @Post('update/:id')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async updateUser(@Param('id') userId: string, @Body() data: any) {
        try {
            await this.usersService.update(userId, data);
            return new ResponseSuccess("USER.UPDATE.SUCCESSFULLY");
        } catch (error) {
            throw new ResponseError('USER.UPDATE.FAILED');
        }
    }


    @Get('me')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async getUserData(@Request() req: any) {
        try {
            var user = await this.usersService.findOne({ _id: req.user.id });
            if (user) user.password = null;
            return new ResponseSuccess("USER.GET_ME.SUCCESSFULLY", user);
        } catch (e) {
            console.log(e);
            return new ResponseError("USER.GET_ME.FAILED", e, 400);
        }
    }

}
