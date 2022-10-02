import { Schema, Document, Model } from 'mongoose';
interface Film extends Document {
    filmName: string;
    timeFilm: string;
    money: number;
    imageFilm: string;
}
declare type FilmModel = Model<Film>;
declare const FilmSchema: Schema<Document<any, any, any>, Model<any, any, any>, undefined, any>;
declare const FilmModel: Model<Film, {}, {}>;
export { Film, FilmModel, FilmSchema };
