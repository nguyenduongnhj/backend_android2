import {
  Controller, Post,
  UsePipes, ValidationPipe,
  UploadedFile, UseInterceptors,
  UseGuards, UploadedFiles,
  Param, Request, BadRequestException,
  HttpCode
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, editFileName } from '../../commons/filters/file.filter';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UsersService } from 'src/services/users/users.service';
import { join } from 'path';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';

/* config */
import config from 'src/config';
import { InvestorsService } from 'src/services/investors/investors.service';

@Controller('v1')
@UseGuards(JwtAuthGuard)
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
export class UploadController {
  constructor(
    private usersService: UsersService,

  ) { }

  // upload sigle image
  @Post('upload/image')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: join(config.files.baseDirectory, config.files.imagesFolderName),
        filename: editFileName
      }),
      fileFilter: imageFileFilter,
    }),
  )
  public async uploadImageFile(@UploadedFile() file: any) {
    if (!file || file.fileValidationError) {
      throw new BadRequestException("Invalid file uploaded [Image file allowed]");
    }

    return new ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
      originalname: file.originalname,
      filename: join('/', file.destination, file.filename),
    });
  }

  // upload avatar
  @Post('upload/avatar/:userid')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: join(config.files.baseDirectory, config.files.imagesAvatarFolderName),
        filename: editFileName
      }),
      fileFilter: imageFileFilter,
    }),
  )
  public async uploadAvatar(@Request() req: any, @Param('userid') userId: string, @UploadedFile() file: any) {
    if (!file || file.fileValidationError) {
      throw new BadRequestException("Invalid file uploaded [Image file allowed]");
    }
    let avatar_path = join('/', file.destination, file.filename);
    this.usersService.setAvatar(req.user.id, avatar_path);
    return new ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
      originalname: file.originalname,
      filename: avatar_path,
    });
  }

  @Post('upload/avatar/investor/:userid')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: join(config.files.baseDirectory, config.files.imagesAvatarFolderName),
        filename: editFileName
      }),
      fileFilter: imageFileFilter,
    }),
  )
  public async uploadAvatarInvestor(@Request() req: any, @Param('userid') userId: string, @UploadedFile() file: any) {
    if (!file || file.fileValidationError) {
      throw new BadRequestException("Invalid file uploaded [Image file allowed]");
    }
    let avatar_path = join('/', file.destination, file.filename);
    this.usersService.setAvatarInvestor(req.user.id, avatar_path);
    return new ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", {
      originalname: file.originalname,
      filename: avatar_path,
    });
  }


  @Post('upload/images')
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: join(config.files.baseDirectory, config.files.imagesFolderName),
        filename: editFileName
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    if (files.length === 0) {
      throw new BadRequestException("Invalid file uploaded [Image file allowed]");
    }
    const res: any = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: join('/', file.destination, file.filename),
      };
      res.push(fileReponse);
    });
    return new ResponseSuccess("UPLOAD.UPLOADED_SUCCESSFULLY", res);
  }
}
