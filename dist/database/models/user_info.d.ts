import { Schema, Document, Model } from 'mongoose';
interface UserInfo extends Document {
    name: string;
    address: string;
    phone: string;
}
declare type UserInfoModel = Model<UserInfo>;
declare const UserInfoSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const UserInfoModel: Model<UserInfo, {}, {}>;
export { UserInfo, UserInfoModel, UserInfoSchema };
