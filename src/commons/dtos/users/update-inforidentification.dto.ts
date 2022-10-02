import Identification from "src/commons/interfaces/profile/identification.interface";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateInforIdentificationDto {
    @IsNotEmpty()
    citizen_identification: Identification;

    @IsOptional()
    other_identification: Identification
}