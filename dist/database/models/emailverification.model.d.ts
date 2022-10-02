import { Schema, Document, Model } from 'mongoose';
export interface EmailVerification extends Document {
    email: string;
    token: string;
    updated_at: Date;
}
export declare const EmailVerificationSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const EmailVerificationModel: Model<EmailVerification, {}, {}>;
