import { Document, Model, Schema } from 'mongoose';
export interface AdministrativeUnit extends Document {
    readonly level: String;
    readonly name: String;
    readonly en_name: String;
    readonly code: String;
    readonly of: String;
    readonly upper_level_code: String;
    readonly province?: AdministrativeUnit;
    readonly ward?: AdministrativeUnit;
    readonly district?: AdministrativeUnit;
}
export declare const AdministrativeUnitSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
export declare const AdministrativeUnitModel: Model<AdministrativeUnit, {}, {}>;
