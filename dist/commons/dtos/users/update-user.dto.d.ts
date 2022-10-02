import { District, Province, Ward } from "src/commons/interfaces/address.interface";
export declare class UpdateUserAddressDto {
    address_detail?: string;
    ward_code?: string;
    ward?: Ward;
    province?: Province;
    district?: District;
}
