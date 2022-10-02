import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { IResponse } from 'src/commons/interfaces/response.interface';
import { AdministrativeUnitsService } from 'src/services/administrative-units/administrative-units.service';
export declare class AdministrativeUnitsController {
    private administrativeUnitsService;
    constructor(administrativeUnitsService: AdministrativeUnitsService);
    getVietNamProvinceList(): Promise<IResponse>;
    getVietNamDistrictList(provinceCode: String): Promise<ResponseSuccess>;
    getVietNamWardList(districtCode: String): Promise<ResponseSuccess>;
}
