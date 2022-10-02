"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const config_1 = require("../../config");
const mailer_service_1 = require("./mailer.service");
const user_model_1 = require("../../database/models/user.model");
let MailProcessor = class MailProcessor {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    onActive(job) {
        console.log(`Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    onError(job, error) {
        console.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
    }
    onComplete(job, result) {
        console.debug(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`);
    }
};
__decorate([
    bull_1.OnQueueActive(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailProcessor.prototype, "onActive", null);
__decorate([
    bull_1.OnQueueFailed(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MailProcessor.prototype, "onError", null);
__decorate([
    bull_1.OnQueueCompleted(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MailProcessor.prototype, "onComplete", null);
MailProcessor = __decorate([
    bull_1.Processor(config_1.default.mail.queue.name),
    __metadata("design:paramtypes", [mailer_service_1.MailerService])
], MailProcessor);
exports.MailProcessor = MailProcessor;
//# sourceMappingURL=mail.processor.js.map