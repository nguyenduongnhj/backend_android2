import { CreateJobDto } from 'src/commons/dtos/jobs/job.dto';
export declare class JobsService {
    createJob(createDto: CreateJobDto): Promise<import("src/database/models/job.model").Job>;
    deleteJob(id: String): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    getListJob(page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    getListJobByAddr(addr: String, page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    getListJobByWork(work: String, page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
}
