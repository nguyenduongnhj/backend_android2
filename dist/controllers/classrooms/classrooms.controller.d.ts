import { IResponse } from 'src/commons/interfaces/response.interface';
import { CreateClassroomDto } from 'src/commons/dtos/classrooms/create-classroom.dto';
import { ClassroomsService } from 'src/services/classrooms/classrooms.service';
import { AdministrativeUnitsService } from 'src/services/administrative-units/administrative-units.service';
export declare class ClassroomsController {
    private classroomsService;
    private administrativeUnitsService;
    constructor(classroomsService: ClassroomsService, administrativeUnitsService: AdministrativeUnitsService);
    tutorCreateClassroom(req: any, createClassroomDto: CreateClassroomDto): Promise<IResponse>;
    studentCreateClassroom(req: any, createClassroomDto: CreateClassroomDto): Promise<IResponse>;
}
