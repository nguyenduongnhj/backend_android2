"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = (exception instanceof common_2.HttpException) ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (status === common_1.HttpStatus.CONFLICT) {
            return response.status(200)
                .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: exception.message
            });
        }
        if (status === common_1.HttpStatus.BAD_REQUEST) {
            let message = JSON.stringify(exception.getResponse());
            return response.status(200)
                .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: JSON.parse(message)['message'],
                error: exception.message
            });
        }
        if (status === common_1.HttpStatus.FORBIDDEN) {
            return response.status(200)
                .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: "COMMON.FORBIDDEN"
            });
        }
        return response
            .status(200)
            .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exception.filter.js.map