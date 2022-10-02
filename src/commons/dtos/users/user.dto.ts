import { RoleType } from "src/commons/enum/role-type.enum";
import { User } from "src/database/models/user.model";
import { IsOptional } from "class-validator";

export class UserDto {
    @IsOptional()
    name: string;

    @IsOptional()
    username: string;

    @IsOptional()
    email: string;

    @IsOptional()
    phone_number?: string;

    @IsOptional()
    first_name?: string;

    @IsOptional()
    last_name?: string;

    @IsOptional()
    birthday?: Date;

    @IsOptional()
    password: string;

    @IsOptional()
    point: number;

    @IsOptional()
    money: number;


    @IsOptional()
    auth: {
        email : {
            verified : boolean,
        }
    };

    @IsOptional()
    avatar?: string;
 

}