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
const create_history_dto_1 = require("../../commons/dtos/films/create-history.dto");
const history_model_1 = require("../../database/models/history.model");
let HistoryService = class HistoryService {
    async create(createTodoDto) {
        var history = new history_model_1.HistoryModel(Object.assign({}, createTodoDto));
        return history.save();
    }
    async getListHistory(userId) {
        let history = await history_model_1.HistoryModel.find({ cmtnd: userId });
        return history;
    }
};
HistoryService = __decorate([
    common_1.Injectable()
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map