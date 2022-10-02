import * as mongoose from 'mongoose';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
export declare class DatabaseModule {
}
