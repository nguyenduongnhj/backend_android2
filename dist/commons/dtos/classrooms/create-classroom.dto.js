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
exports.CreateClassroomDto = void 0;
const class_validator_1 = require("class-validator");
const address_dto_1 = require("../address/address.dto");
class CreateClassroomDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateClassroomDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateClassroomDto.prototype, "subject_id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateClassroomDto.prototype, "teacher_id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateClassroomDto.prototype, "student_id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateClassroomDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], CreateClassroomDto.prototype, "fee_per_lesson", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateClassroomDto.prototype, "number_students", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateClassroomDto.prototype, "topic", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", address_dto_1.AddressDto)
], CreateClassroomDto.prototype, "address", void 0);
exports.CreateClassroomDto = CreateClassroomDto;
//# sourceMappingURL=create-classroom.dto.js.map