import { Body, Controller, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ResponseError, ResponseSuccess } from 'src/commons/dtos/response.dto';
import { JobsService } from 'src/services/jobs/jobs.service';

@Controller('v1/jobs')
export class JobsController {
    constructor(
        private service: JobsService,
    ) { }


    @Post('create')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async createInvestor(@Body() data: any) {
        try {
            await this.service.createJob(data);
            return new ResponseSuccess("CREATE.JOB.SUCCESSFULLY");
        } catch (error) {
            console.log(error)
            throw new ResponseError('CREATE.JOB.FAILED', error);
        }
    }

    @Post('')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async getListJob(@Body() data: any, @Query('page') page) {
        try {
            let type = data.type
            let content = data.content
            var result
            if (type == "address") {
                result = await this.service.getListJobByAddr(content, page)

            } else if (type == "work") {
                result = await this.service.getListJobByWork(content, page)
            } else {
                result = await this.service.getListJob(page)
            }
            return new ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e)
            result = await this.service.getListJob(page)
            return new ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
    }


    @Get('delete:/id')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async deleteJob(@Param() params) {
        let id = params.id
        try {
            return new ResponseSuccess("DELETE.POST.SUCCESS", await this.service.deleteJob(id))
        } catch (e) {
            console.log("e = " + e)
            return new ResponseError("DELETE.POST.FAILED")

        }
    }



}
