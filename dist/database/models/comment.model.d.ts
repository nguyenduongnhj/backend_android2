import { Document, Model, Schema } from 'mongoose';
import Content from 'src/commons/interfaces/post/content.interface';
interface Comment extends Document {
    readonly content: Content;
    readonly total_like: Number;
    readonly total_comment: Number;
}
declare type CommentModel = Model<Comment>;
declare const CommentSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const CommentModel: Model<Comment, {}, {}>;
export { Comment, CommentModel, CommentSchema };
