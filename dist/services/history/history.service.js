"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const history_dto_1 = require("../../commons/dtos/jobs/history.dto");
const history_model_1 = require("../../database/models/history.model");
let HistoryService = class HistoryService {
    async createHistory(createDto) {
        let history = new history_model_1.HistoryModel(Object.assign({}, createDto));
        return history.save();
    }
    async getListHistory(page) {
        let skip = page * 10;
        let listHistory = {
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
        };
        let data = await history_model_1.HistoryModel.aggregate([
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
        ]);
        listHistory["history"] = data;
        listHistory['next_page'] = 'jobs?page=' + (page * 1 + 1);
        listHistory['prev_page'] = 'jobs?page=' + (page < 1 ? page : page - 1);
        return listHistory;
    }
    async updateType(id, type) {
        return await history_model_1.HistoryModel.updateOne({ _id: id }, { type: type }).exec();
    }
};
HistoryService = __decorate([
    common_1.Injectable()
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map