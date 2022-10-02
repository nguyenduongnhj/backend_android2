/* Commons */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

/* libs */
import * as helmet from 'helmet';
import * as express from 'express';
import { join } from 'path';

/* modules */
import { AppModule } from './app.module';
import config from './config';
import { AllExceptionsFilter } from './commons/filters/all-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  /** static public file */
  app.use('/storage', express.static(join(__dirname, '..', 'storage')));
  /*******/

  /* SECURITY */
  app.enableCors({
    origin: "*",
    methods: config.app.cors_options.methods
  });
  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());

  // validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
 
  await app.listen(config.app.port || 3000);
}
bootstrap();
