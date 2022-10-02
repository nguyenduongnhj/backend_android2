import { District, Province, Ward } from "src/commons/interfaces/address.interface";
export declare class UpdateUserAddressDto {
    address_detail?: string;
    ward_code?: string;
    ward?: Ward;
    province?: Province;
    district?: District;
}
export declare class UpdateUserDto {
    readonly first_name: string;
    readonly phone_number: string;
    readonly birthday: Date;
    readonly point: number;
    readonly money: number;
    readonly cmtnd?: string;
    readonly gender?: string;
}
