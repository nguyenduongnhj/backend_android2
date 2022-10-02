import HightSchool from '../../interfaces/profile/hight-school.interface';
import University from '../../interfaces/profile/university.interface';
import Certificate from '../../interfaces/profile/certificate.interface';
import Skill from "src/commons/interfaces/profile/skill.interface";
import Specialized from "src/commons/interfaces/profile/specialized.interface";
import Prize from "src/commons/interfaces/profile/prize.interface";
export declare class CreateProfileDto {
    readonly hight_school: HightSchool;
    readonly university: University;
    readonly prize: [Prize];
    readonly certificate: [Certificate];
    readonly specialized: [Specialized];
    readonly skill: [Skill];
    readonly introduce: String;
    readonly other: String;
}
