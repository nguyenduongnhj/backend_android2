import { Schema, Document, Model } from 'mongoose';
interface History extends Document {
    filmName: string;
    time: Date;
    point: number;
    money: number;
    state: boolean;
    cmtnd: string;
}
declare type HistoryModel = Model<History>;
declare const HistorySchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const HistoryModel: Model<History, {}, {}>;
export { History, HistoryModel, HistorySchema };
