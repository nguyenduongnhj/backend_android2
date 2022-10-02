// success: true => message, data
// success: false => errorMessage, error
import { IResponse } from '../interfaces/response.interface';

export class ResponseError implements IResponse{
  constructor (infoMessage:string, data?: any, statusCode?: number) {
    this.success = false;
    this.message = infoMessage;
    this.data = data;
    this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 400;
    console.warn(new Date().toString() + ' - [Response]: ' + infoMessage + (data ? ' - ' + JSON.stringify(data): ''));
  };
  message: string;
  data: any[];
  errorMessage: any;
  statusCode: number;
  error: any;
  success: boolean;
}

export class ResponsePaginationSuccess implements IResponse{
  constructor (infoMessage:string, data?: any, pagination_options?: any, statusCode?: number, notLog?: boolean) {
    this.success = true;
    this.message = infoMessage;
    this.data = data;
    this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 200;
    this.pagination_options = pagination_options;

    if(!notLog) {
      try {
        var offuscateRequest = JSON.parse(JSON.stringify(data));
        if(offuscateRequest && offuscateRequest.token) offuscateRequest.token = "*******";
        console.log(new Date().toString() + ' - [Response]: ' + JSON.stringify(offuscateRequest))
      } catch(error){}
    };
  };
  message: string;
  data: any[];
  errorMessage: any;
  statusCode: number;
  error: any;
  success: boolean;
  pagination_options: any;
}

export class ResponseSuccess implements IResponse{
  constructor (infoMessage:string, data?: any, statusCode?: number, notLog?: boolean) {
    this.success = true;
    this.message = infoMessage;
    this.data = data;
    this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 200;
    if(!notLog) {
      try {
        var offuscateRequest = JSON.parse(JSON.stringify(data));
        if(offuscateRequest && offuscateRequest.token) offuscateRequest.token = "*******";
        console.log(new Date().toString() + ' - [Response]: ' + JSON.stringify(offuscateRequest))
      } catch(error){}
    };
  };
  message: string;
  data: any[];
  errorMessage: any;
  statusCode: number;
  error: any;
  success: boolean;
}