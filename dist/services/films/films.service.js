"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsService = void 0;
const common_1 = require("@nestjs/common");
const create_film_dto_1 = require("../../commons/dtos/films/create-film.dto");
const update_film_dto_1 = require("../../commons/dtos/films/update-film.dto");
const film_model_1 = require("../../database/models/film.model");
let FilmsService = class FilmsService {
    async create(createTodoDto) {
        var film = new film_model_1.FilmModel(Object.assign({}, createTodoDto));
        return film.save();
    }
    async getListFilm() {
        let film = await film_model_1.FilmModel.find();
        return film;
    }
};
FilmsService = __decorate([
    common_1.Injectable()
], FilmsService);
exports.FilmsService = FilmsService;
//# sourceMappingURL=films.service.js.map