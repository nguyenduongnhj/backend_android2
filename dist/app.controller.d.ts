import { AppService } from './app.service';
import { MailerService } from './modules/mailer/mailer.service';
import { UsersService } from 'src/services/users/users.service';
export declare class AppController {
    private readonly appService;
    private readonly mailerService;
    private usersService;
    constructor(appService: AppService, mailerService: MailerService, usersService: UsersService);
    getHello(): string;
}
