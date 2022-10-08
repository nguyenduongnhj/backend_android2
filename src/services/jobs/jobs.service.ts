import { Injectable } from '@nestjs/common';
import { CreateJobDto } from 'src/commons/dtos/jobs/job.dto';
import { JobModel } from 'src/database/models/job.model';

@Injectable()
export class JobsService {

    async createJob(createDto: CreateJobDto) {
        var job = new JobModel({
            ...createDto
        })
        return job.save()
    }

    async deleteJob(id: String) {
        return await JobModel.deleteOne({ _id: id })
    }


    async getListJob(page: number) {
        let skip = page * 10
        let listJob = {
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

        let data = await JobModel.aggregate([
            matchInvestor,
            {
                $unwind: {
                    path: "$investor",
                    preserveNullAndEmptyArrays: true
                }
            },
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ])

        listJob["jobs"] = data
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1)
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1)
        return listJob
    }

    async getListJobByAddr(addr: String, page: number) {
        let skip = page * 10
        let listJob = {
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

        let data = await JobModel.aggregate([
            {
                "$match": {
                    "$expr": { "$eq": ["$address", addr] }
                }
            },
            matchInvestor,
            {
                $unwind: {
                    path: "$investor",
                    preserveNullAndEmptyArrays: true
                }
            },
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ])

        listJob["jobs"] = data
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1)
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1)

        return listJob
    }

    async getListJobByWork(work: String, page: number) {
        let skip = page * 10
        let listJob = {
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

        let data = await JobModel.aggregate([
            {
                "$match": {
                    "$expr": { "$eq": ["$work", work] }
                }
            },
            matchInvestor,
            {
                $unwind: {
                    path: "$investor",
                    preserveNullAndEmptyArrays: true
                }
            },
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ])

        listJob["jobs"] = data
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1)
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1)

        return listJob
    }

}
