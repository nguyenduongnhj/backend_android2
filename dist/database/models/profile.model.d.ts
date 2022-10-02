import { Document, Model, Schema } from 'mongoose';
import HightSchool from '../../commons/interfaces/profile/hight-school.interface';
import University from '../../commons/interfaces/profile/university.interface';
import Certificate from '../../commons/interfaces/profile/certificate.interface';
interface Profile extends Document {
    readonly hight_school: HightSchool;
    readonly university: University;
    readonly prize: [String];
    readonly certificate: [Certificate];
    readonly specialized: String;
    readonly skill: [String];
    readonly introduce: String;
    readonly other: String;
}
declare type ProfileModel = Model<Profile>;
declare const ProfileSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const ProfileModel: Model<Profile, {}, {}>;
export { Profile, ProfileModel, ProfileSchema };
