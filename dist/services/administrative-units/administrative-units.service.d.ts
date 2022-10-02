import { AdministrativeUnit } from 'src/database/models/administrative-unit.model';
import { AddressDto } from 'src/commons/dtos/address/address.dto';
import Address from 'src/commons/interfaces/address.interface';
export declare class AdministrativeUnitsService {
    getVietNamProvinceList(): Promise<AdministrativeUnit[]>;
    getVietNamDistrictList(provinceCode: String): Promise<AdministrativeUnit[]>;
    getVietNamWardList(districtCode: String): Promise<AdministrativeUnit[]>;
    getAndConcatAddressInfoFromWardCode(addressDto: AddressDto): Promise<Address | any>;
}
