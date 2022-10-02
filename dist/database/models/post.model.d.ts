import { Document, Model, Schema } from 'mongoose';
import Content from 'src/commons/interfaces/post/content.interface';
interface Post extends Document {
    readonly content: Content;
    readonly total_like: Number;
    readonly total_comment: Number;
}
declare type PostModel = Model<Post>;
declare const PostSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const PostModel: Model<Post, {}, {}>;
export { Post, PostModel, PostSchema };
