import { Classroom } from 'src/database/models/classroom.model';
import { CreateClassroomDto } from 'src/commons/dtos/classrooms/create-classroom.dto';
import { Paginate } from 'src/commons/interfaces/paginate.interface';
export declare class ClassroomsService {
    createClassroom(createClassroomDto: CreateClassroomDto): Promise<Classroom | null>;
    getClassroomOfStudent(studentId: String, page?: number, limit?: number): Promise<Paginate>;
}
