import { Body, Controller, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ResponseError, ResponseSuccess } from 'src/commons/dtos/response.dto';
import { InvestorsService } from 'src/services/investors/investors.service';

@Controller('v1/investors')
export class InvestorsController {

    constructor(
        private service: InvestorsService,
    ) { }

    @Post('create')
    // @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async createInvestor(@Body() data: any) {
        try {
            await this.service.createInvestor(data);
            return new ResponseSuccess("INVESTOR.REGISTER.SUCCESSFULLY");
        } catch (error) {
            console.log(error)
            throw new ResponseError('INVESTOR.REGISTER.FAILED', error);
        }
    }

    @Post('update/:id')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    async updateUser(@Param('id') userId: string, @Body() data: any) {
        try {
            await this.service.update(userId, data);
            return new ResponseSuccess("INVESTOR.UPDATE.SUCCESSFULLY");
        } catch (error) {
            throw new ResponseError('INVESTOR.UPDATE.FAILED');
        }
    }


}
