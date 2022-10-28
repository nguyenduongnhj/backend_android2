import { Schema, Document, Model } from 'mongoose';
interface Investor extends Document {
    phone_number?: string;
    full_name?: string;
    avatar?: string;
    introduct: string;
    other: string;
    email: string;
    cover_image: string;
}
declare type InvestorModel = Model<Investor>;
declare const InvestorSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const InvestorModel: Model<Investor, {}, {}>;
export { Investor, InvestorModel, InvestorSchema };
