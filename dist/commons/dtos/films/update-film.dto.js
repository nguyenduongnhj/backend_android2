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
exports.UpdateFilmDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateFilmDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "filmName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateFilmDto.prototype, "imageFilm", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], UpdateFilmDto.prototype, "timeFilm", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateFilmDto.prototype, "money", void 0);
exports.UpdateFilmDto = UpdateFilmDto;
//# sourceMappingURL=update-film.dto.js.map