"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const job_dto_1 = require("../../commons/dtos/jobs/job.dto");
const job_model_1 = require("../../database/models/job.model");
let JobsService = class JobsService {
    async createJob(createDto) {
        var job = new job_model_1.JobModel(Object.assign({}, createDto));
        return job.save();
    }
    async deleteJob(id) {
        return await job_model_1.JobModel.deleteOne({ _id: id });
    }
    async getListJob(page) {
        let skip = page * 10;
        let listJob = {
            data: [],
            next_page: "",
            prev_page: ""
        };
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
        };
        let data = await job_model_1.JobModel.aggregate([
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
        ]);
        listJob["jobs"] = data;
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1);
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1);
        return listJob;
    }
    async getListJobByAddr(addr, page) {
        let skip = page * 10;
        let listJob = {
            data: [],
            next_page: "",
            prev_page: ""
        };
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
        };
        let data = await job_model_1.JobModel.aggregate([
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
        ]);
        listJob["jobs"] = data;
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1);
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1);
        return listJob;
    }
    async getListJobByWork(work, page) {
        let skip = page * 10;
        let listJob = {
            data: [],
            next_page: "",
            prev_page: ""
        };
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
        };
        let data = await job_model_1.JobModel.aggregate([
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
        ]);
        listJob["jobs"] = data;
        listJob['next_page'] = 'jobs?page=' + (page * 1 + 1);
        listJob['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1);
        return listJob;
    }
};
JobsService = __decorate([
    common_1.Injectable()
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map