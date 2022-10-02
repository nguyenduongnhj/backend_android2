import { IsEmail, IsNotEmpty, Matches, MinLength, IsOptional } from "class-validator";

export class CreateHistoryDto {

    @IsOptional()
    readonly investor_id: String;

    @IsOptional()
    readonly user_id: String;

    @IsOptional()
    readonly job_id: String;

    @IsOptional()
    readonly type: String;

}