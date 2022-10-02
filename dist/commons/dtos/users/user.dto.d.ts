export declare class UserDto {
    name: string;
    username: string;
    email: string;
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    birthday?: Date;
    password: string;
    point: number;
    money: number;
    auth: {
        email: {
            verified: boolean;
        };
    };
    avatar?: string;
}
