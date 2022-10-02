import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import config from '../config';


let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect( config.mongodb.uri, options)
    },
];

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}