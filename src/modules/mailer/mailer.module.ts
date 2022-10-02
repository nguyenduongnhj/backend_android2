/** Dependencies **/
import { DynamicModule, Module } from '@nestjs/common';

/** Modules **/
import { MailerCoreModule } from './mailer-core.module';
import { MailProcessor } from './mail.processor';

/** Interfaces **/
import { MailerAsyncOptions } from './interfaces/mailer-async-options.interface';
import { HandlebarsAdapter } from './adapters/handlebars.adapter';

/** Config **/
import config from 'src/config';


@Module({})
export class MailerModule {
  public static forRoot(): DynamicModule {
    return {
      module: MailerModule,
      imports: [
        /** Modules **/
        MailerCoreModule.forRoot({
          transport: {
            host: config.mail.host,
            port: config.mail.port,
            secure: config.mail.secure === true,
            ignoreTLS: config.mail.secure !== false,
            auth: {
              user: config.mail.user,
              pass: config.mail.pass,
            },
          },
          template: {
            dir: `${process.cwd()}/templates/`,
            adapter: new HandlebarsAdapter(),
            options: {
              strict: false,
            },
          },
        })
      ],
      providers: [
        MailProcessor
      ]
    };
  }

  public static forRootAsync(options: MailerAsyncOptions): DynamicModule {
    return {
      module: MailerModule,
      imports: [
        /** Modules **/
        MailerCoreModule.forRootAsync(options),
      ],
    };
  }
}
