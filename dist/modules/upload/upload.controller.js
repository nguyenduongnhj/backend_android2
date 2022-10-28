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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_filter_1 = require("../../commons/filters/file.filter");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const users_service_1 = require("../../services/users/users.service");
const path_1 = require("path");
const response_dto_1 = require("../../commons/dtos/response.dto");
const config_1 = require("../../config");
const investors_service_1 = require("../../services/investors/investors.service");
let UploadController = class UploadController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async uploadImageFile(file) {
        if (!file || file.fileValidationError) {
            throw new common_1.BadRequestException("Invalid file uploaded [Image file allowed]");
        }
        return new response_dto_1.ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
            originalname: file.originalname,
            filename: path_1.join('/', file.destination, file.filename),
        });
    }
    async uploadAvatar(req, userId, file) {
        if (!file || file.fileValidationError) {
            throw new common_1.BadRequestException("Invalid file uploaded [Image file allowed]");
        }
        let avatar_path = path_1.join('/', file.destination, file.filename);
        this.usersService.setAvatar(req.user.id, avatar_path);
        return new response_dto_1.ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
            originalname: file.originalname,
            filename: avatar_path,
        });
    }
    async uploadAvatarInvestor(req, userId, file) {
        if (!file || file.fileValidationError) {
            throw new common_1.BadRequestException("Invalid file uploaded [Image file allowed]");
        }
        let avatar_path = path_1.join('/', file.destination, file.filename);
        this.usersService.setAvatarInvestor(req.user.id, avatar_path);
        return new response_dto_1.ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
            originalname: file.originalname,
            filename: avatar_path,
        });
    }
    async uploadMultipleFiles(files) {
        if (files.length === 0) {
            throw new common_1.BadRequestException("Invalid file uploaded [Image file allowed]");
        }
        const res = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: path_1.join('/', file.destination, file.filename),
            };
            res.push(fileReponse);
        });
        return new response_dto_1.ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", res);
    }
};
__decorate([
    common_1.Post('upload/image'),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: path_1.join(config_1.default.files.baseDirectory, config_1.default.files.imagesFolderName),
            filename: file_filter_1.editFileName
        }),
        fileFilter: file_filter_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImageFile", null);
__decorate([
    common_1.Post('upload/avatar/:userid'),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('avatar', {
        storage: multer_1.diskStorage({
            destination: path_1.join(config_1.default.files.baseDirectory, config_1.default.files.imagesAvatarFolderName),
            filename: file_filter_1.editFileName
        }),
        fileFilter: file_filter_1.imageFileFilter,
    })),
    __param(0, common_1.Request()),
    __param(1, common_1.Param('userid')),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadAvatar", null);
__decorate([
    common_1.Post('upload/avatar/investor/:userid'),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('avatar', {
        storage: multer_1.diskStorage({
            destination: path_1.join(config_1.default.files.baseDirectory, config_1.default.files.imagesAvatarFolderName),
            filename: file_filter_1.editFileName
        }),
        fileFilter: file_filter_1.imageFileFilter,
    })),
    __param(0, common_1.Request()),
    __param(1, common_1.Param('userid')),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadAvatarInvestor", null);
__decorate([
    common_1.Post('upload/images'),
    common_1.HttpCode(200),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('images', 10, {
        storage: multer_1.diskStorage({
            destination: path_1.join(config_1.default.files.baseDirectory, config_1.default.files.imagesFolderName),
            filename: file_filter_1.editFileName
        }),
        fileFilter: file_filter_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadMultipleFiles", null);
UploadController = __decorate([
    common_1.Controller('v1'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UsePipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    })),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map