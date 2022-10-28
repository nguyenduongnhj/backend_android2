import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { InvestorsService } from 'src/services/investors/investors.service';
export declare class InvestorsController {
    private service;
    constructor(service: InvestorsService);
    createInvestor(data: any): Promise<ResponseSuccess>;
    updateUser(userId: string, data: any): Promise<ResponseSuccess>;
}
