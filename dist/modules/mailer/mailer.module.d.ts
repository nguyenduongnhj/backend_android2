import { DynamicModule } from '@nestjs/common';
import { MailerAsyncOptions } from './interfaces/mailer-async-options.interface';
export declare class MailerModule {
    static forRoot(): DynamicModule;
    static forRootAsync(options: MailerAsyncOptions): DynamicModule;
}
