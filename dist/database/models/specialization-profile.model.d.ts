import { Document, Model, Schema } from 'mongoose';
import Subject from 'src/commons/interfaces/profile/subject.interface';
interface SpecializationProfile extends Document {
    readonly position: String;
    readonly subject: [Subject];
    readonly class_schedule: any;
    readonly type: String;
}
declare type SpecializationProfileModel = Model<SpecializationProfile>;
declare const SpecializationProfileSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const SpecializationProfileModel: Model<SpecializationProfile, {}, {}>;
export { SpecializationProfile, SpecializationProfileModel, SpecializationProfileSchema };
