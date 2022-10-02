import { IsEmail, IsNotEmpty, Matches, IsOptional } from "class-validator";

export class LogDto {

    @IsNotEmpty()
    readonly message?: string;

}
