import { Document, Model, Schema } from 'mongoose';
export interface Follow extends Document {
    readonly follower_id: String;
    readonly following_id: String;
}
export declare const FollowSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const FollowModel: Model<Follow, {}, {}>;
