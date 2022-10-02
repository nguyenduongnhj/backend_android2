import { Job } from 'bull';
import { MailerService } from './mailer.service';
export declare class MailProcessor {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    onActive(job: Job): void;
    onError(job: Job<any>, error: any): void;
    onComplete(job: Job, result: any): void;
}
