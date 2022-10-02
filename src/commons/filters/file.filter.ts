import { extname } from 'path';

/* config */
import config from "src/config";

export const imageFileFilter = (req: any, file: any, callback: any) => {
    let validImageExtensions = config.files.validImageExtensions.join('|');
    var regexImageExtensions = new RegExp('\\.(' + validImageExtensions + ')$');

    if (!file.originalname.match(regexImageExtensions)) {
      req.fileValidationError = 'Only image files allowed';
      return callback(null , false);
    }
    callback(null, true);
};


export const editFileName = (req: any, file: any, callback: any) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('') + '_' + new Date().getTime();

  callback(null, `${req.user.id}_${name}-${randomName}${fileExtName}`);
};