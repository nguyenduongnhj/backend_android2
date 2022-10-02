import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/services/users/users.service';
import { MailerService } from 'src/modules/mailer/mailer.service';
export declare class AuthController {
    private authService;
    private usersService;
    private readonly mailerService;
    constructor(authService: AuthService, usersService: UsersService, mailerService: MailerService);
}
