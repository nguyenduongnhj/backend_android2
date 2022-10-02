"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomsService = void 0;
const common_1 = require("@nestjs/common");
const classroom_model_1 = require("../../database/models/classroom.model");
const subject_model_1 = require("../../database/models/subject.model");
const student_classroom_model_1 = require("../../database/models/student-classroom.model");
const create_classroom_dto_1 = require("../../commons/dtos/classrooms/create-classroom.dto");
const student_classroom_dto_1 = require("../../commons/dtos/classrooms/student-classroom.dto");
const paginate_interface_1 = require("../../commons/interfaces/paginate.interface");
const helpers_1 = require("../../commons/helpers");
const classroom_status_enum_1 = require("../../commons/enum/classroom-status.enum");
let ClassroomsService = class ClassroomsService {
    async createClassroom(createClassroomDto) {
        let subject = await subject_model_1.SubjectModel.findById(createClassroomDto.subject_id);
        if (!subject)
            throw new common_1.NotFoundException('CLASSROOM.CREATE.NOT_FOUND_SUBJECT');
        try {
            let classroom = new classroom_model_1.ClassroomModel(Object.assign({}, createClassroomDto));
            await classroom.save();
            if (typeof createClassroomDto.student_id !== 'undefined') {
                await student_classroom_model_1.StudentClassroomModel.create({
                    student_id: createClassroomDto.student_id,
                    classroom_id: classroom.id
                });
            }
            return classroom;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async getClassroomOfStudent(studentId, page = 0, limit = 10) {
        let studentClassrooms = await student_classroom_model_1.StudentClassroomModel.find({ student_id: studentId }, 'classroom_id').populate({
            path: 'classroom',
            populate: {
                path: 'subject',
                select: 'name_subject'
            }
        }).limit(limit * 1).skip(page * limit);
        var count = await student_classroom_model_1.StudentClassroomModel.find({ student_id: studentId }, 'classroom_id').countDocuments();
        if (!studentClassrooms)
            return null;
        var classrooms = [];
        studentClassrooms.forEach(studentClassroom => {
            classrooms.push(studentClassroom.classroom);
        });
        return {
            data: classrooms,
            pagination_options: helpers_1.createPaginationOptions(limit, page, count)
        };
    }
};
ClassroomsService = __decorate([
    common_1.Injectable()
], ClassroomsService);
exports.ClassroomsService = ClassroomsService;
//# sourceMappingURL=classrooms.service.js.map