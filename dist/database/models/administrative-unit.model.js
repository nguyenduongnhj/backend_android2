"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeUnitModel = exports.AdministrativeUnitSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AdministrativeUnitSchema = new mongoose_1.Schema({
    level: String,
    name: String,
    en_name: String,
    code: String,
    of: String,
    upper_level_code: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.AdministrativeUnitSchema.set('toObject', { virtuals: true });
exports.AdministrativeUnitSchema.set('toJSON', { virtuals: true });
exports.AdministrativeUnitSchema.virtual('province', {
    ref: 'AdministrativeUnit',
    localField: 'upper_level_code',
    foreignField: 'code',
    justOne: true
});
exports.AdministrativeUnitSchema.virtual('district', {
    ref: 'AdministrativeUnit',
    localField: 'upper_level_code',
    foreignField: 'code',
    justOne: true
});
exports.AdministrativeUnitSchema.virtual('ward', {
    ref: 'AdministrativeUnit',
    localField: 'upper_level_code',
    foreignField: 'code',
    justOne: true
});
exports.AdministrativeUnitModel = mongoose_1.model('AdministrativeUnit', exports.AdministrativeUnitSchema, 'administrative_units');
//# sourceMappingURL=administrative-unit.model.js.map