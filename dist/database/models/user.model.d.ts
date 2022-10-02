import { Schema, Document, Model } from 'mongoose';
interface User extends Document {
    user_name?: string;
    password?: string;
    phone_number?: string;
    full_name?: string;
    birthday?: Date;
    avatar?: string;
    gender: string;
    email: string;
    address: string;
    career: string;
    level: string;
    introduct: string;
    exp: string;
    skill: string;
}
declare type UserModel = Model<User>;
declare const UserSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const UserModel: Model<User, {}, {}>;
export { User, UserModel, UserSchema };
