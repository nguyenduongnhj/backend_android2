import { IsEmail, IsOptional, Matches } from "class-validator";
import { District, Province, Ward } from "src/commons/interfaces/address.interface";

export class UpdateUserDto {

    @IsOptional()
    @IsEmail()
    @Matches(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
    readonly email: string;

    @IsOptional()
    readonly full_name?: string;

    @IsOptional()
    @Matches(/^\d{10}$/,
        { message: "USER.CREATE.INVALID_PHONE_NUMBER" }
    )
    readonly phone_number?: string;

    @IsOptional()
    readonly gender?: string;

    @IsOptional()
    readonly avatar?: string;

    @IsOptional()
    readonly address?: string;

    @IsOptional()
    readonly birthday?: Date;

    @IsOptional()
    readonly career?: string;

    @IsOptional()
    readonly level?: string;

    @IsOptional()
    readonly introduct?: string;

    @IsOptional()
    readonly exp?: string;

    @IsOptional()
    readonly skill?: string;


    @IsOptional()
    readonly other?: string;

    @IsOptional()
    readonly university?: string;

}
