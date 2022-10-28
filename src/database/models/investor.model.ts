
import {
    model,
    Schema,
    Document,
    Model,
    Types
} from 'mongoose';
import config from 'src/config';

interface Investor extends Document {
    phone_number?: string;
    full_name?: string;
    avatar?: string;
    introduct: string;
    other: string;
    email: string;
    cover_image: string;
}

type InvestorModel = Model<Investor>;

const InvestorSchema = new Schema({

    email: {
        type: String,
        unique: [true, "Email is exists"],
        dropDups: true
    },

    cover_image: {
        type: String,
        default: '\\storage\\avatar.png'
    },

    avatar: {
        type: String,
        default: '\\storage\\avatar.png'
    },

    phone_number: {
        type: String,
        required: [true, 'phone number required']
    },

    full_name: {
        type: String,
        required: [true, 'name required']
    },
    other: String,
    introduct: String,


}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

InvestorSchema.set('toObject', { virtuals: true });
InvestorSchema.set('toJSON', { virtuals: true });


const InvestorModel = model<Investor>('Investor', InvestorSchema, 'investors');

export {
    Investor,
    InvestorModel,
    InvestorSchema
};
