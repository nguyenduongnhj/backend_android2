import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { HistoryService } from 'src/services/history/history.service';
export declare class HistoryController {
    private service;
    constructor(service: HistoryService);
    createInvestor(data: any): Promise<ResponseSuccess>;
    getListJob(page: any): Promise<ResponseSuccess>;
    update(params: any, body: any): Promise<ResponseSuccess>;
}
