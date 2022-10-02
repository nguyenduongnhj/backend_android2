import { Schema, Document, Model } from 'mongoose';
import Identification from '../../commons/interfaces/profile/identification.interface';
export interface InforIdentification extends Document {
    readonly citizen_identification: Identification;
    readonly other_identification: Identification;
}
export declare const InforIdentificationSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const InforIdentificationModel: Model<InforIdentification, {}, {}>;
