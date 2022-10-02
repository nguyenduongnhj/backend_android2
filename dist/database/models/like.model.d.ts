import { Document, Model, Schema, Types } from 'mongoose';
interface Like extends Document {
    readonly post_id: Types.ObjectId;
    readonly user_id: Types.ObjectId;
}
declare type LikeModel = Model<Like>;
declare const LikeSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const LikeModel: Model<Like, {}, {}>;
export { Like, LikeModel, LikeSchema };
