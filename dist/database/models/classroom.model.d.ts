import { Schema, Document, Model } from 'mongoose';
import Address from "src/commons/interfaces/address.interface";
export interface Classroom extends Document {
    name: string;
    subject_id?: string;
    teacher_id?: string;
    description?: string;
    fee_per_lesson?: number;
    tuition_fee?: number;
    number_students?: string;
    topic?: [string];
    address?: Address;
}
export declare const ClassroomSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const ClassroomModel: Model<Classroom, {}, {}>;
