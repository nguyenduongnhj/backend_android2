import {
    Injectable,
} from '@nestjs/common';
import {
    UserModel,
    User
} from 'src/database/models/user.model';

import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
import { UpdateUserDto } from 'src/commons/dtos/users/update-user.dto';

@Injectable()
export class UsersService {

    async findAll(): Promise<User[]> {
        return UserModel.find().exec();
    }

    async existsByEmail(email: string): Promise<boolean> {
        return await UserModel.exists({ email });
    }

    async existsByUsername(username: string): Promise<boolean> {
        return await UserModel.exists({ username });
    }

    async existsByPhoneNumber(phone_number: string): Promise<boolean> {
        return await UserModel.exists({ phone_number });
    }

    async findOne(filters: any): Promise<User | undefined> {
        return await UserModel.findOne(filters).populate('total_followers').populate('total_followings');
    }

    async create(createTodoDto: CreateUserDto) {
        var user = new UserModel({
            ...createTodoDto
        });
        return user.save();
    }

    async update(createTodoDto: UpdateUserDto): Promise<User | any> {
        return await UserModel.updateOne({ cmtnd: createTodoDto.cmtnd }, { birthday: createTodoDto.birthday, phone_number: createTodoDto.phone_number, first_name: createTodoDto.first_name, gender: createTodoDto.gender }).exec();
    }

    async buyFilm(userId: string, money: number, point: number) {
        let user = await UserModel.findOne({ cmtnd: userId });
        if (user.money >= money && user.point >= point) {
            let money2 = user.money - money;
            let point2 = user.point - point;
            await UserModel.updateOne({ cmtnd: userId }, { money: money2, point: point2 }).exec();
            return true
        } else {
            return false;
        }
    }

    async recharge(userId: string, money: number) {
        let user = await UserModel.findOne({ cmtnd: userId });
        let money2 = user.money + money;
        return await UserModel.updateOne({ cmtnd: userId }, { money: money2 }).exec();
    }

    async withdrawMoney(userId: string, money: number) {
        let user = await UserModel.findOne({ cmtnd: userId });
        if (user.money >= money) {
            let money2 = user.money - money;
            await UserModel.updateOne({ cmtnd: userId }, { money: money2 }).exec();
            return true

        } else {
            return false;
        }
    }


    async getUser(id: string): Promise<User | null> {
        try {
            return await UserModel.findOne({ cmtnd: id });
        } catch (e) {
            return null;
        }
    }

    public async setAvatar(userId: string, avatarUrl: string) {
        return await UserModel.updateOne({ _id: userId }, { avatar: avatarUrl });
    }


}
