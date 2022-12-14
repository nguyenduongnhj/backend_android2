import {
    Injectable,
} from '@nestjs/common';
import {
    UserModel,
    User
} from 'src/database/models/user.model';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
import { InvestorModel } from 'src/database/models/investor.model';
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
        return await UserModel.exists({ user_name: username });
    }

    async existsByPhoneNumber(phone_number: string): Promise<boolean> {
        return await UserModel.exists({ phone_number });
    }

    async findOne(filters: any): Promise<User | undefined> {
        return await UserModel.findOne(filters);
    }

    async create(createTodoDto: CreateUserDto) {
        var user = new UserModel({
            ...createTodoDto
        });
        return user.save();
    }

    async getUser(id: string): Promise<User | null> {
        try {
            return await UserModel.findOne({ _id: id });
        } catch (e) {
            return null;
        }
    }

    public async setAvatar(userId: string, avatarUrl: string) {
        return await UserModel.updateOne({ _id: userId }, { avatar: avatarUrl });
    }

    public async setAvatarInvestor(id: string, avatarUrl: string) {
        return await InvestorModel.updateOne({ _id: id }, { avatar: avatarUrl });
    }

    async update(userId: String, updateUserDto: UpdateUserDto): Promise<User | any> {
        return await UserModel.updateOne({ _id: userId },
            {
                ...updateUserDto,
            }
        ).exec();
    }

    async updatePassword(userId: String, password: string): Promise<User | any> {
        return await UserModel.updateOne({ _id: userId }, { password: password }).exec();
    }


}
