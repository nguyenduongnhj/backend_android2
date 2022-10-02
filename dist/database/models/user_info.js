"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoSchema = exports.UserInfoModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const address_interface_1 = require("../../commons/interfaces/address.interface");
const UserInfoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        dropDups: true,
    },
    address: {
        type: String,
        default: "Ha Noi"
    },
    phone: { type: String }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.UserInfoSchema = UserInfoSchema;
const UserInfoModel = mongoose_1.model('UserInfo', UserInfoSchema, 'user_info');
exports.UserInfoModel = UserInfoModel;
//# sourceMappingURL=user_info.js.map