import { Injectable } from '@nestjs/common';
import { CreateInvestorDto } from 'src/commons/dtos/jobs/investor.dto';
import { Investor, InvestorModel } from 'src/database/models/investor.model';

@Injectable()
export class InvestorsService {

    async createInvestor(createDto: CreateInvestorDto) {
        var investor = new InvestorModel({
            ...createDto
        })
        return investor.save();
    }

    async findOne(filters: any): Promise<Investor | undefined> {
        return await InvestorModel.findOne(filters);
    }

    public async setAvatar(id: string, avatarUrl: string) {
        return await InvestorModel.updateOne({ _id: id }, { avatar: avatarUrl });
    }

    async update(userId: String, updateDto: CreateInvestorDto): Promise<Investor | any> {
        return await InvestorModel.updateOne({ _id: userId },
            {
                ...updateDto,
            }
        ).exec();
    }



}
