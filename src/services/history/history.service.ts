import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from 'src/commons/dtos/jobs/history.dto';
import { HistoryModel } from 'src/database/models/history.model';

@Injectable()
export class HistoryService {

    async createHistory(createDto: CreateHistoryDto) {
        let history = new HistoryModel({
            ...createDto
        })
        return history.save()
    }

    async getListHistory(page: number) {
        let skip = page * 10
        let listHistory = {
            data: [],
            next_page: "",
            prev_page: ""
        }

        let matchInvestor = {
            $lookup: {
                from: 'investors',
                let: { "investorId": "$investor_id" },
                "pipeline": [
                    {
                        "$match": {
                            "$expr": { "$eq": ["$_id", "$$investorId"] }
                        }
                    }
                ],
                "as": "investor"
            }
        }

        let mathchJob = {
            $lookup: {
                from: 'jobs',
                let: { "jobId": "$job_id" },
                "pipeline": [
                    {
                        "$match": {
                            "$expr": { "$eq": ["$_id", "$$jobId"] }
                        }
                    }
                ],
                "as": "job"
            }
        }

        let data = await HistoryModel.aggregate([
            matchInvestor,
            mathchJob,
            {
                $unwind: {
                    path: "$investor",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                    path: "$job",
                    preserveNullAndEmptyArrays: true
                }
            },
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ])

        listHistory["history"] = data
        listHistory['next_page'] = 'jobs?page=' + (page * 1 + 1)
        listHistory['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1)
        return listHistory
    }

    async updateType(id: String, type: string) {
        return await HistoryModel.updateOne({ _id: id }, { type: type }).exec();
    }

    async deleteJob(id: String) {
        return await HistoryModel.deleteOne({ _id: id })

    }

}
