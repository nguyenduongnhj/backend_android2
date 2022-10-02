/* Commons */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

/* Modules */
import { DatabaseModule } from "./database/database.module";
import { UploadModule } from './modules/upload/upload.module';
import { MailerModule } from './modules/mailer/mailer.module';
import { AuthModule } from './auth/auth.module';

/* Controllers */
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './controllers/users/users.controller';

/* Services */
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './services/users/users.service';
import { AllExceptionsFilter } from './commons/filters/all-exception.filter';
import { JobsController } from './controller/jobs/jobs.controller';
import { JobsController } from './controllers/jobs/jobs.controller';
import { InvestorsController } from './controllers/investors/investors.controller';
import { HistoryController } from './controllers/history/history.controller';
import { HistoryService } from './services/history/history.service';
import { InvestorsService } from './services/investors/investors.service';
import { JobsService } from './services/jobs/jobs.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UploadModule,
    BullModule.forRoot({
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    UsersController,
    JobsController,
    InvestorsController,
    HistoryController,
  ],
  providers: [
    AppService,
    AuthService,
    UsersService,
    AllExceptionsFilter,
    HistoryService,
    InvestorsService,
    JobsService,
  ]
})
export class AppModule { }
