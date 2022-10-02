
import {
    model,
    Schema,
    Document,
    Model,
    Types
} from 'mongoose';
import config from 'src/config';

interface History extends Document {
    type: string;

}

type HistoryModel = Model<History>;

const HistorySchema = new Schema({
    investor_id: {
        type: Types.ObjectId,
        ref: "Investor",
        require: true
    },

    type: {
        type: String,
        enum: ['saved', 'applied'],
        default: 'saved'
    },

    user_id: {
        type: Types.ObjectId,
        ref: "User",
        require: true
    },

    job_id: {
        type: Types.ObjectId,
        ref: "Job",
        require: true
    },


}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

HistorySchema.set('toObject', { virtuals: true });
HistorySchema.set('toJSON', { virtuals: true });


const HistoryModel = model<History>('History', HistorySchema, 'historys');

export {
    History,
    HistoryModel,
    HistorySchema
};
