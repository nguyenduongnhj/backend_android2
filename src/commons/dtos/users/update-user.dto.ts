import { IsOptional } from "class-validator";
import { District, Province, Ward } from "src/commons/interfaces/address.interface";

export class UpdateUserAddressDto {
    @IsOptional()
    address_detail?: string;

    @IsOptional()
    ward_code?: string;

    @IsOptional()
    ward?: Ward;

    @IsOptional()
    province?: Province;

    @IsOptional()
    district?: District;
}
export class UpdateUserDto {
    @IsOptional()
    readonly first_name: string;

    @IsOptional()
    readonly phone_number: string;

    @IsOptional()
    readonly birthday: Date;

    @IsOptional()
    readonly point: number;

    @IsOptional()
    readonly money: number;

    @IsOptional()
    readonly cmtnd?: string;

    @IsOptional()
    readonly gender?: string;

}
