import { ResponseError, ResponseSuccess } from 'src/commons/dtos/response.dto';
import { JobsService } from 'src/services/jobs/jobs.service';
export declare class JobsController {
    private service;
    constructor(service: JobsService);
    createInvestor(data: any): Promise<ResponseSuccess>;
    getListJob(data: any, page: any): Promise<ResponseSuccess>;
    deleteJob(params: any): Promise<ResponseSuccess | ResponseError>;
}
