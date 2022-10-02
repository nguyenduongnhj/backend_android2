import { Schema, Document, Model } from 'mongoose';
interface User extends Document {
    first_name?: string;
    cmtnd?: string;
    birthday?: Date;
    phone_number?: String;
    point?: number;
    gender: String;
    money?: number;
}
declare type UserModel = Model<User>;
declare const UserSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const UserModel: Model<User, {}, {}>;
export { User, UserModel, UserSchema };
