import { IResponse } from '../interfaces/response.interface';
export declare class ResponseError implements IResponse {
    constructor(infoMessage: string, data?: any, statusCode?: number);
    message: string;
    data: any[];
    errorMessage: any;
    statusCode: number;
    error: any;
    success: boolean;
}
export declare class ResponsePaginationSuccess implements IResponse {
    constructor(infoMessage: string, data?: any, pagination_options?: any, statusCode?: number, notLog?: boolean);
    message: string;
    data: any[];
    errorMessage: any;
    statusCode: number;
    error: any;
    success: boolean;
    pagination_options: any;
}
export declare class ResponseSuccess implements IResponse {
    constructor(infoMessage: string, data?: any, statusCode?: number, notLog?: boolean);
    message: string;
    data: any[];
    errorMessage: any;
    statusCode: number;
    error: any;
    success: boolean;
}
