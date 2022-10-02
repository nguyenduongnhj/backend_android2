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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomsController = void 0;
const common_1 = require("@nestjs/common");
const response_interface_1 = require("../../commons/interfaces/response.interface");
const create_classroom_dto_1 = require("../../commons/dtos/classrooms/create-classroom.dto");
const response_dto_1 = require("../../commons/dtos/response.dto");
const classrooms_service_1 = require("src/services/classrooms/classrooms.service");
const administrative_units_service_1 = require("src/services/administrative-units/administrative-units.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const has_roles_decorator_1 = require("../../commons/decorators/has-roles.decorator");
const role_type_enum_1 = require("../../commons/enum/role-type.enum");
let ClassroomsController = class ClassroomsController {
    constructor(classroomsService, administrativeUnitsService) {
        this.classroomsService = classroomsService;
        this.administrativeUnitsService = administrativeUnitsService;
    }
    async tutorCreateClassroom(req, createClassroomDto) {
        let user = req.user;
        createClassroomDto.teacher_id = user.id;
        if (typeof createClassroomDto.address !== 'undefined') {
            createClassroomDto.address = await this.administrativeUnitsService.getAndConcatAddressInfoFromWardCode({
                ward_code: createClassroomDto.address.ward_code,
                address_detail: createClassroomDto.address.address_detail
            });
        }
        let classroom = await this.classroomsService.createClassroom(createClassroomDto);
        if (!classroom)
            new response_dto_1.ResponseError('CLASSROOM.CREATE.FAILED', null, 500);
        return new response_dto_1.ResponseSuccess('CLASSROOM.CREATE.SUCCESSFULLY', classroom);
    }
    async studentCreateClassroom(req, createClassroomDto) {
        let user = req.user;
        createClassroomDto.student_id = user.id;
        if (typeof createClassroomDto.address !== 'undefined') {
            createClassroomDto.address = await this.administrativeUnitsService.getAndConcatAddressInfoFromWardCode({
                ward_code: createClassroomDto.address.ward_code,
                address_detail: createClassroomDto.address.address_detail
            });
        }
        let classroom = await this.classroomsService.createClassroom(createClassroomDto);
        if (!classroom)
            new response_dto_1.ResponseError('CLASSROOM.CREATE.FAILED', null, 500);
        return new response_dto_1.ResponseSuccess('CLASSROOM.CREATE.SUCCESSFULLY', classroom);
    }
};
__decorate([
    common_1.Post('tutor/create'),
    common_1.HttpCode(200),
    has_roles_decorator_1.HasRoles(role_type_enum_1.RoleType.TUTOR),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_classroom_dto_1.CreateClassroomDto]),
    __metadata("design:returntype", Promise)
], ClassroomsController.prototype, "tutorCreateClassroom", null);
__decorate([
    common_1.Post('student/create'),
    common_1.HttpCode(200),
    has_roles_decorator_1.HasRoles(role_type_enum_1.RoleType.USER),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_classroom_dto_1.CreateClassroomDto]),
    __metadata("design:returntype", Promise)
], ClassroomsController.prototype, "studentCreateClassroom", null);
ClassroomsController = __decorate([
    common_1.Controller('v1/classrooms'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof classrooms_service_1.ClassroomsService !== "undefined" && classrooms_service_1.ClassroomsService) === "function" ? _a : Object, typeof (_b = typeof administrative_units_service_1.AdministrativeUnitsService !== "undefined" && administrative_units_service_1.AdministrativeUnitsService) === "function" ? _b : Object])
], ClassroomsController);
exports.ClassroomsController = ClassroomsController;
//# sourceMappingURL=classrooms.controller.js.map