import { Body, Controller, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateHistoryDto } from 'src/commons/dtos/jobs/history.dto';
import { ResponseError, ResponseSuccess } from 'src/commons/dtos/response.dto';
import { HistoryModel } from 'src/database/models/history.model';
import { HistoryService } from 'src/services/history/history.service';

@Controller('v1/history')
export class HistoryController {
    constructor(
        private service: HistoryService,
    ) { }

    @Post('create')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async createInvestor(@Body() data: any) {
        try {
            await this.service.createHistory(data);
            return new ResponseSuccess("CREATE.JOB.SUCCESSFULLY");
        } catch (error) {
            console.log(error)
            throw new ResponseError('CREATE.JOB.FAILED', error);
        }
    }

    @Get('')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async getListJob(@Query('page') page) {
        try {
            let result = await this.service.getListHistory(page)
            return new ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e)
            return new ResponseSuccess("GET.JOB.SUCCESSFULLY");
        }
    }

    @Post('update:/id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async update(@Param() params, @Body() body) {
        try {
            let id = params.id
            let data = body.type
            let result = await this.service.updateType(id, data)
            return new ResponseSuccess("UPDATE.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e)
            return new ResponseSuccess("UPDATE.JOB.SUCCESSFULLY");
        }
    }

    @Get('apply:/id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async applyJob(@Param() params) {

        try {
            let id = params.id
            let data = "applied"
            let result = await this.service.updateType(id, data)
            return new ResponseSuccess("APPLY.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e)
            return new ResponseSuccess("APPLY.JOB.SUCCESSFULLY");
        }
    }

    @Get('delete:/id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async deleteJob(@Param() params) {
        try {
            let id = params.id
            let result = await this.service.deleteJob(id)
            return new ResponseSuccess("APPLY.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e)
            return new ResponseSuccess("APPLY.JOB.SUCCESSFULLY");
        }
    }



}
