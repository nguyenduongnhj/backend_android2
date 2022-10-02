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
exports.CreateProfileDto = void 0;
const class_validator_1 = require("class-validator");
const skill_interface_1 = require("../../interfaces/profile/skill.interface");
const specialized_interface_1 = require("../../interfaces/profile/specialized.interface");
const prize_interface_1 = require("../../interfaces/profile/prize.interface");
class CreateProfileDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], CreateProfileDto.prototype, "hight_school", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], CreateProfileDto.prototype, "university", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "prize", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "certificate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "specialized", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateProfileDto.prototype, "skill", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "introduce", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "other", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=create-profile.dto.js.map