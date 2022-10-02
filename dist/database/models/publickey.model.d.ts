import { Schema, Document, Model } from 'mongoose';
interface PublicKey extends Document {
    cmtnd: string;
    modulus: string;
    exponent: string;
}
declare type PublicKeyModel = Model<PublicKey>;
declare const PublicKeySchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const PublicKeyModel: Model<PublicKey, {}, {}>;
export { PublicKey, PublicKeyModel, PublicKeySchema };
