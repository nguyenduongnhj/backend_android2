import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { MailerService } from './modules/mailer/mailer.service';
import { UsersService } from 'src/services/users/users.service';
import { HasRoles } from './commons/decorators/has-roles.decorator';
import { RolesGuard } from './auth/guards/roles.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RoleType } from './commons/enum/role-type.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailerService: MailerService,
    private usersService: UsersService
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HasRoles(RoleType.USER)
  getHello(): string {
    return this.appService.getHello();
  }
}
