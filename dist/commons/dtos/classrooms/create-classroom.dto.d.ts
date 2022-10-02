import { AddressDto } from "../address/address.dto";
export declare class CreateClassroomDto {
    name: String;
    subject_id: String;
    teacher_id: String;
    student_id: String;
    description?: String;
    fee_per_lesson: Number;
    number_students?: Number;
    topic: [String];
    address: AddressDto;
}
