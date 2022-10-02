/// <reference types="mongoose" />
import { User } from 'src/database/models/user.model';
import { CreateUserDto } from 'src/commons/dtos/users/create-user.dto';
import { UpdateUserDto } from 'src/commons/dtos/users/update-user.dto';
export declare class UsersService {
    findAll(): Promise<User[]>;
    existsByEmail(email: string): Promise<boolean>;
    existsByUsername(username: string): Promise<boolean>;
    existsByPhoneNumber(phone_number: string): Promise<boolean>;
    findOne(filters: any): Promise<User | undefined>;
    create(createTodoDto: CreateUserDto): Promise<User>;
    update(createTodoDto: UpdateUserDto): Promise<User | any>;
    buyFilm(userId: string, money: number, point: number): Promise<boolean>;
    recharge(userId: string, money: number): Promise<import("mongoose").UpdateWriteOpResult>;
    withdrawMoney(userId: string, money: number): Promise<boolean>;
    getUser(id: string): Promise<User | null>;
    setAvatar(userId: string, avatarUrl: string): Promise<import("mongoose").UpdateWriteOpResult>;
}
