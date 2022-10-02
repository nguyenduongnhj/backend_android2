import { IsEmail, IsNotEmpty, Matches, IsOptional } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    readonly first_name?: string;

    @IsNotEmpty()
    readonly cmtnd?: string;

    @IsOptional()
    @Matches(/^\d{10}$/,
        { message: "USER.CREATE.INVALID_PHONE_NUMBER" }
    )
    readonly phone_number?: string;

    @IsOptional()
    readonly gender?: string;

}
