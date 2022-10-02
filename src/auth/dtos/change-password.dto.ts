import { IsNotEmpty, Matches, MinLength } from "class-validator";


export class ChangePasswordDto {
    @IsNotEmpty()
    readonly old_pass: string;

    @IsNotEmpty()
    @MinLength(8, { message: "AUTH.CHANGE_PASSWORD.SHORT_PASSWORD" })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%&'*+\/=?^_`{|}~.-])(?=.*[A-Z])[0-9a-zA-Z!@#$%&'*+\/=?^_`{|}~.-]{8,}$/,
        { message: " AUTH.CHANGE_PASSWORD.WEAK_PASSWORD" }
    )
    readonly new_pass: string;

    @IsNotEmpty()
    @MinLength(8, { message: "AUTH.CHANGE_PASSWORD.SHORT_PASSWORD" })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%&'*+\/=?^_`{|}~.-])(?=.*[A-Z])[0-9a-zA-Z!@#$%&'*+\/=?^_`{|}~.-]{8,}$/,
        { message: "AUTH.CHANGE_PASSWORD.WEAK_PASSWORD" }
    )
    readonly confirm_pass: string;
}