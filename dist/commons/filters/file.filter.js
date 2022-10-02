"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.imageFileFilter = void 0;
const path_1 = require("path");
const config_1 = require("../../config");
const imageFileFilter = (req, file, callback) => {
    let validImageExtensions = config_1.default.files.validImageExtensions.join('|');
    var regexImageExtensions = new RegExp('\\.(' + validImageExtensions + ')$');
    if (!file.originalname.match(regexImageExtensions)) {
        req.fileValidationError = 'Only image files allowed';
        return callback(null, false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path_1.extname(file.originalname);
    const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('') + '_' + new Date().getTime();
    callback(null, `${req.user.id}_${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file.filter.js.map