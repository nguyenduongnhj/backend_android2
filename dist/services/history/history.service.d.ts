import { CreateHistoryDto } from 'src/commons/dtos/films/create-history.dto';
export declare class HistoryService {
    create(createTodoDto: CreateHistoryDto): Promise<History | any>;
    getListHistory(userId: string): Promise<import("src/database/models/history.model").History[]>;
}
