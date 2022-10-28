/// <reference types="mongoose" />
import { CreateInvestorDto } from 'src/commons/dtos/jobs/investor.dto';
import { Investor } from 'src/database/models/investor.model';
export declare class InvestorsService {
    createInvestor(createDto: CreateInvestorDto): Promise<Investor>;
    findOne(filters: any): Promise<Investor | undefined>;
    setAvatar(id: string, avatarUrl: string): Promise<import("mongoose").UpdateWriteOpResult>;
    update(userId: String, updateDto: CreateInvestorDto): Promise<Investor | any>;
}
