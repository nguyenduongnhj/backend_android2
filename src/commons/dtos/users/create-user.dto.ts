import { IsEmail, IsNotEmpty, Matches, MinLength, IsOptional } from "class-validator";
import { RoleType } from "src/commons/enum/role-type.enum";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(5, { message: "USER.CREATE.SHORT_USERNAME" })
    readonly user_name: string;

    @IsNotEmpty()
    @IsEmail()
    @Matches(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8, { message: "USER.CREATE.SHORT_PASSWORD" })
    @Matches(/[\w\d]{8,}$/,
        { message: "USER.CREATE.WEAK_PASSWORD" }
    )
    readonly password: string;

    @IsNotEmpty()
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


}