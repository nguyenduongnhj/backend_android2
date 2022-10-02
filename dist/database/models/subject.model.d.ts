import { Document, Model, Schema } from 'mongoose';
interface Subject extends Document {
    readonly name_subject: String;
    readonly topic: [String];
}
declare type SubjectModel = Model<Subject>;
declare const SubjectSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const SubjectModel: Model<Subject, {}, {}>;
export { Subject, SubjectModel, SubjectSchema };
