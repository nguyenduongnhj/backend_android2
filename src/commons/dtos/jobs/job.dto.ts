import { IsEmail, IsNotEmpty, Matches, MinLength, IsOptional } from "class-validator";

export class CreateJobDto {

    @IsNotEmpty()
    readonly investor_id: String;

    @IsNotEmpty()
    readonly company_name: string;

    @IsOptional()
    readonly other?: string;

    @IsOptional()
    readonly age?: Number;

    @IsOptional()
    readonly address?: string;

    @IsOptional()
    readonly work?: string;

    @IsOptional()
    readonly level?: string;

    @IsOptional()
    readonly salary?: string;

    @IsOptional()
    readonly skill?: string;


}