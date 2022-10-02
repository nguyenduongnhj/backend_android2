
import {
    model,
    Schema,
    Document,
    Model,
    Types
} from 'mongoose';
import config from 'src/config';

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

type JobModel = Model<Job>;

const JobSchema = new Schema({
    level: String,
    address: String,
    skill: String,
    salary: String,
    work: String,

    investor_id: {
        type: Types.ObjectId,
        ref: "Investor",
        require: true
    },

    company_name: {
        type: String,
        required: [true, 'company name name required']
    },

    other: String,
    age: Number,


}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

JobSchema.set('toObject', { virtuals: true });
JobSchema.set('toJSON', { virtuals: true });


const JobModel = model<Job>('Job', JobSchema, 'jobs');

export {
    Job,
    JobModel,
    JobSchema
};
