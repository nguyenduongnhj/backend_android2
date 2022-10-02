import { TutorsService } from 'src/services/tutors/tutors.service';
import { CreateProfileDto } from 'src/commons/dtos/profile/create-profile.dto';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { ProfileSpecializationDto } from 'src/commons/dtos/profile/specialization-profile.dto';
import { SubjectDto } from 'src/commons/dtos/profile/subject.dto';
export declare class TutorsController {
    private services;
    constructor(services: TutorsService);
    create(req: any, createTodoDto: CreateProfileDto): Promise<any>;
    update(req: any, dataDto: CreateProfileDto): Promise<any>;
    getProfile(params: any, req: any): Promise<any>;
    getTeachingRecords(params: any, req: any): Promise<ResponseSuccess>;
    updateTeachingRecords(req: any, dataDto: ProfileSpecializationDto): Promise<ResponseSuccess>;
    getListSubject(): Promise<any>;
    createSubject(dataDto: SubjectDto): Promise<any>;
    updateSubject(req: any, dataDto: SubjectDto): Promise<void>;
}
