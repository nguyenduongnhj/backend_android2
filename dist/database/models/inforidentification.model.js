"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InforIdentificationModel = exports.InforIdentificationSchema = void 0;
const mongoose_1 = require("mongoose");
const image_type_enum_1 = require("../../commons/enum/image-type.enum");
exports.InforIdentificationSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        unique: true,
        require: true
    },
    citizen_identification: {
        front_image: { type: String, require: true },
        back_image: String,
        image_type: {
            type: String,
            enum: [image_type_enum_1.ImageType.BASE64, image_type_enum_1.ImageType.DEFAULT],
            default: image_type_enum_1.ImageType.DEFAULT
        }
    },
    other_identification: {
        front_image: String,
        back_image: String,
        image_type: {
            type: String,
            enum: [image_type_enum_1.ImageType.BASE64, image_type_enum_1.ImageType.DEFAULT],
            default: image_type_enum_1.ImageType.DEFAULT
        }
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.InforIdentificationModel = mongoose_1.model('InforIdentification', exports.InforIdentificationSchema, 'infor_identifications');
//# sourceMappingURL=inforidentification.model.js.map