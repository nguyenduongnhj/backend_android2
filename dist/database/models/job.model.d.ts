import { Schema, Document, Model } from 'mongoose';
interface Job extends Document {
    level?: string;
    skill?: string;
    salary: string;
    work: string;
    age: number;
    address: string;
    investor_id: string;
    other: string;
    company_name: string;
}
declare type JobModel = Model<Job>;
declare const JobSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const JobModel: Model<Job, {}, {}>;
export { Job, JobModel, JobSchema };
