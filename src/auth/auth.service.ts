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

    async validateUser(username: string, password: string): Promise<User | null> {
        let filters = await this.username(username);
        const user = await UserModel.findOne(filters);

        if (user && await this.comparePassword(password, user.password)) {
            return user;
        }
        return null;
    }

    /*
    *    Function: Login
    *    Return: {
    *       user: object,
    *       access_token: string
    *    }
    */
    async login(user: any): Promise<any> {
        const userLogin = await this.validateUser(user.username, user.password);

        // check user exists
        if (!userLogin) throw new UnauthorizedException('AUTH.LOGIN.FAILED');
        // remove password
        userLogin.password = null;

        // create token
        const token = await this.createAccessToken(userLogin);

        return {
            user: userLogin,
            ...token
        };
    }

    async createAccessToken(user: User) {
        const expiresIn = config.jwt.expiresIn;
        const userInfo = {
            username: user.user_name,
            sub: user.id,
        };
        const access_token = this.jwtService.sign(userInfo);

        return {
            expires_in: expiresIn,
            access_token: access_token,
        };
    }

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
        return { user_name: username };
    }

    /*
    * Function: register
    */
    async register(data: CreateUserDto) {

        const created = await this.usersService.create({
            ...data,
            password: await this.hashPassword(data.password),
            avatar: join('/', config.files.baseDirectory, config.files.defaultsFolderName, 'avatar.png')
        });
        const token = await this.createAccessToken(created);

        return {
            user: created,
            ...token
        };
    }

    async changePassword(userId: String, oldPass: string, newPass: string): Promise<boolean> {
        let user = await UserModel.findById(userId);

        if (user) {
            if (await this.comparePassword(oldPass, user.password))
                return await this.usersService.updatePassword(userId, await this.hashPassword(newPass));
            return false;
        }

        return false;
    }

}