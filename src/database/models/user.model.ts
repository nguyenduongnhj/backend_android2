
import {
    model,
    Schema,
    Document,
    Model,
    Types
} from 'mongoose';
import config from 'src/config';

interface User extends Document {
    first_name?: string;
    cmtnd?: string;
    birthday?: Date;
    phone_number?: String;
    point?: number;
    gender: String;
    money?: number;
}

type UserModel = Model<User>;

const UserSchema = new Schema({

    first_name: {
        type: String,
        required: [true, 'First name required']
    },
    cmtnd: {
        type: String,
        required: true
    },
    birthday: Date,
    phone_number: {
        type: String,
        unique: [true, "Phone is exists"],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    point: {
        type: Number,
        default: 0
    },
    money: {
        type: Number,
        default: 0
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });


const UserModel = model<User>('User', UserSchema, 'users');

export {
    User,
    UserModel,
    UserSchema
};
