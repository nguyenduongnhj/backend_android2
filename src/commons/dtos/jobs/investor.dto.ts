import { IsEmail, IsNotEmpty, Matches, MinLength, IsOptional } from "class-validator";

export class CreateInvestorDto {

    @IsNotEmpty()
    @Matches(/^\d{10}$/,
        { message: "USER.CREATE.INVALID_PHONE_NUMBER" }
    )
    readonly phone_number?: string;

    @IsNotEmpty()
    @IsEmail()
    @Matches(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
    readonly email: string;

    @IsNotEmpty()
    readonly full_name?: string;


    @IsOptional()
    readonly avatar?: string;

    @IsOptional()
    readonly introduct?: string;

    @IsOptional()
    readonly other?: string;


}