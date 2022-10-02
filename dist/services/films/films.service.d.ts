import { CreateFilmDto } from 'src/commons/dtos/films/create-film.dto';
export declare class FilmsService {
    create(createTodoDto: CreateFilmDto): Promise<import("src/database/models/film.model").Film>;
    getListFilm(): Promise<import("src/database/models/film.model").Film[]>;
}
