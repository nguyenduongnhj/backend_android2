"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmSchema = exports.FilmModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const FilmSchema = new mongoose_1.Schema({
    filmName: {
        type: String,
        require: true
    },
    imageFilm: {
        type: String,
        default: config_1.default.files.baseDirectory + '/defaults/avatar.png'
    },
    timeFilm: {
        type: String
    },
    money: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.FilmSchema = FilmSchema;
const FilmModel = mongoose_1.model('Film', FilmSchema, 'films');
exports.FilmModel = FilmModel;
//# sourceMappingURL=film.model.js.map