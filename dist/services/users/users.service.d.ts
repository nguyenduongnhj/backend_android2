/// <reference types="mongoose" />
import { User } from 'src/database/models/user.model';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
export declare class UsersService {
    findAll(): Promise<User[]>;
    existsByEmail(email: string): Promise<boolean>;
    existsByUsername(username: string): Promise<boolean>;
    existsByPhoneNumber(phone_number: string): Promise<boolean>;
    findOne(filters: any): Promise<User | undefined>;
    create(createTodoDto: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<User | null>;
    setAvatar(userId: string, avatarUrl: string): Promise<import("mongoose").UpdateWriteOpResult>;
    update(userId: String, updateUserDto: CreateUserDto): Promise<User | any>;
    updatePassword(userId: String, password: string): Promise<User | any>;
}
