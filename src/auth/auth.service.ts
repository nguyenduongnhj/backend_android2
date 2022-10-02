import {
    Injectable,
    HttpException,
    HttpStatus,
    UnauthorizedException,
    ForbiddenException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../services/users/users.service';
import {
    UserModel,
    User
} from 'src/database/models/user.model';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
import { RoleType } from 'src/commons/enum/role-type.enum';
import config from 'src/config';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { join } from 'path';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }


    // hash password
    async hashPassword(password: string): Promise<string | null> {
        try {

            const salt = await bcrypt.genSaltSync(10);
            let passwordHash = await bcrypt.hashSync(password, salt);

            return passwordHash;
        } catch (e) {
            return null
        }
    }

    // comparePassword
    async comparePassword(password: string, hashPassword: string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, hashPassword);
        } catch (e) {
            return false;
        }
    }

    // return username or email
    async username(username: string): Promise<any> {
        // check if login with email
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)) {
            return { email: username };
        }

        // check if login with phone number
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(username)) {
            return { phone_number: username };
        }

        // default login with username
        return { username: username };
    }

}
