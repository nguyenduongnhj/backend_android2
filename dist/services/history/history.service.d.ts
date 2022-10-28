/// <reference types="mongoose" />
import { CreateHistoryDto } from 'src/commons/dtos/jobs/history.dto';
export declare class HistoryService {
    createHistory(createDto: CreateHistoryDto): Promise<import("src/database/models/history.model").History>;
    getListHistory(page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    updateType(id: String, type: string): Promise<import("mongoose").UpdateWriteOpResult>;
}
