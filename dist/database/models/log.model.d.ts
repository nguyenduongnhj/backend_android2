import { Schema, Document, Model } from 'mongoose';
interface Log extends Document {
    message: string;
    cmtnd: string;
}
declare type LogModel = Model<Log>;
declare const LogSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const LogModel: Model<Log, {}, {}>;
export { Log, LogModel, LogSchema };
