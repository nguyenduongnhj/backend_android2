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
