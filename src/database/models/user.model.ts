
import {
    model,
    Schema,
    Document,
    Model,
    Types
} from 'mongoose';
import config from 'src/config';

interface User extends Document {
    user_name?: string;
    password?: string;
    phone_number?: string;
    full_name?: string;
    birthday?: Date;
    avatar?: string;
    gender: string;
    career: string;
    level: string;
    address: string;
    introduct: string;
    exp: string;
    skill: string;
    email: string;
}

type UserModel = Model<User>;

const UserSchema = new Schema({
    level: String,
    address: String,
    introduct: String,
    exp: String,
    skill: String,
    career: {
        type: String,
        required: [true, 'User name required']
    },

    user_name: {
        type: String,
        required: [true, 'User name required']
    },

    email: {
        type: String,
        unique: [true, "Email is exists"],
        dropDups: true
    },

    password: {
        type: String,
        require: true
    },

    full_name: {
        type: String,
        required: [true, 'name required']
    },

    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },

    avatar: {
        type: String,
        default: config.files.baseDirectory + '/defaults/avatar.png'
    },

    phone_number: {
        type: String,
        required: [true, 'phone number required']
    },

    birthday: Date,
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
