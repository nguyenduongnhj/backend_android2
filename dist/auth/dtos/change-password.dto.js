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
exports.ChangePasswordDto = void 0;
const class_validator_1 = require("class-validator");
class ChangePasswordDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "old_pass", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(8, { message: "AUTH.CHANGE_PASSWORD.SHORT_PASSWORD" }),
    class_validator_1.Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%&'*+\/=?^_`{|}~.-])(?=.*[A-Z])[0-9a-zA-Z!@#$%&'*+\/=?^_`{|}~.-]{8,}$/, { message: " AUTH.CHANGE_PASSWORD.WEAK_PASSWORD" }),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "new_pass", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(8, { message: "AUTH.CHANGE_PASSWORD.SHORT_PASSWORD" }),
    class_validator_1.Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%&'*+\/=?^_`{|}~.-])(?=.*[A-Z])[0-9a-zA-Z!@#$%&'*+\/=?^_`{|}~.-]{8,}$/, { message: "AUTH.CHANGE_PASSWORD.WEAK_PASSWORD" }),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "confirm_pass", void 0);
exports.ChangePasswordDto = ChangePasswordDto;
//# sourceMappingURL=change-password.dto.js.map