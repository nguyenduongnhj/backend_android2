import { Processor, Process, OnQueueActive, OnQueueFailed, OnQueueCompleted } from '@nestjs/bull';
import { Job } from 'bull';
import config from 'src/config';
import { MailerService } from './mailer.service';
import { User } from 'src/database/models/user.model';


@Processor(config.mail.queue.name)
export class MailProcessor {
    constructor(
        private readonly mailerService: MailerService,
    ) { }

    @OnQueueActive()
    onActive(job: Job) {
        console.log(
            `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
        );
    }

    @OnQueueFailed()
    onError(job: Job<any>, error: any) {
        console.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack)
    }

    @OnQueueCompleted()
    onComplete(job: Job, result: any) {
        console.debug(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`)
    }

}