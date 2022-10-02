import Address from "src/commons/interfaces/address.interface";
import { District, Province, Ward } from "src/commons/interfaces/address.interface";
export declare class AddressDto implements Address {
    address_detail?: String;
    ward_code?: String;
    ward?: Ward;
    province?: Province;
    district?: District;
}
