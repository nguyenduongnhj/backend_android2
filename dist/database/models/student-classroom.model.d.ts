import { Schema, Document, Model } from 'mongoose';
import { Classroom } from './classroom.model';
export interface StudentClassroom extends Document {
    classroom?: Classroom;
    classroom_id: String;
    student_id: String;
}
export declare const StudentClassroomSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const StudentClassroomModel: Model<StudentClassroom, {}, {}>;
