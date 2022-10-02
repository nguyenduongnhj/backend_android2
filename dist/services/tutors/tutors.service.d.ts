import { CreateProfileDto } from 'src/commons/dtos/profile/create-profile.dto';
import { Profile } from 'src/database/models/profile.model';
import { ProfileSpecializationDto } from 'src/commons/dtos/profile/specialization-profile.dto';
import { SpecializationProfile } from 'src/database/models/specialization-profile.model';
import { UsersService } from '../users/users.service';
import { SubjectDto } from 'src/commons/dtos/profile/subject.dto';
export declare class TutorsService {
    private userService;
    constructor(userService: UsersService);
    getProfileTutor(id: string): Promise<Profile | null>;
    existsProfile(id: any): Promise<any>;
    updateProfileTutor(userId: any, updateTodoDto: any): Promise<Profile | any>;
    createProfileTutor(userId: String, createTodoDto: CreateProfileDto): Promise<Profile | any>;
    createTeachingRecords(id: any, dataDto: ProfileSpecializationDto): Promise<SpecializationProfile | any>;
    updateTeachingRecords(id: String, dataDto: ProfileSpecializationDto): Promise<SpecializationProfile | any>;
    getTeachingRecords(id: String): Promise<SpecializationProfile | any>;
    existsTeachingRecords(id: any): Promise<any>;
    addSubject(dataDto: SubjectDto): Promise<any>;
    getListSubject(): Promise<any>;
    updateSubject(id: any, dataDto: SubjectDto): Promise<any>;
}
