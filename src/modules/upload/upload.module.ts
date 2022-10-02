import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UsersService } from 'src/services/users/users.service';

@Module({
  imports: [  ],
  providers: [UploadService, UsersService],
  controllers: [UploadController]
})
export class UploadModule {}
