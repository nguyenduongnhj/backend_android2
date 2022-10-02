import { SentMessageInfo } from 'nodemailer';
import { MailerOptions } from './interfaces/mailer-options.interface';
import { ISendMailOptions } from './interfaces/send-mail-options.interface';
import { MailerTransportFactory as IMailerTransportFactory } from './interfaces/mailer-transport-factory.interface';
import { User } from 'src/database/models/user.model';
import { Queue } from 'bull';
export declare class MailerService {
    private readonly mailerOptions;
    private readonly transportFactory;
    private mailQueue;
    private transporter;
    private transporters;
    private initTemplateAdapter;
    constructor(mailerOptions: MailerOptions, transportFactory: IMailerTransportFactory, mailQueue: Queue);
    sendMail(sendMailOptions: ISendMailOptions): Promise<SentMessageInfo>;
    sendVerificationEmail(user: User, token: string): Promise<boolean>;
}
