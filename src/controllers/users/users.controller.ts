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
    async updateUser(@Param('id') userId: string, @Body() data: any) {
        try {
            await this.usersService.update(userId, data);
            return new ResponseSuccess("USER.UPDATE.SUCCESSFULLY");
        } catch (error) {
            throw new ResponseError('USER.UPDATE.FAILED');
        }
    }

    @Get(':id')
    @HttpCode(200)
    async getMoneyAndPoint(@Param('id') userId: string): Promise<IResponse | HttpException> {
        let user = await this.usersService.getUser(userId);
        if (!user) throw new NotFoundException('USER.GET_USER.NOT_FOUND');
        return new ResponseSuccess("USER.GET_USER.SUCCESSFULLY", user);
    }



}
