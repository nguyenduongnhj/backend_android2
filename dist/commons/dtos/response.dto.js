"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = exports.ResponsePaginationSuccess = exports.ResponseError = void 0;
class ResponseError {
    constructor(infoMessage, data, statusCode) {
        this.success = false;
        this.message = infoMessage;
        this.data = data;
        this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 400;
        console.warn(new Date().toString() + ' - [Response]: ' + infoMessage + (data ? ' - ' + JSON.stringify(data) : ''));
    }
    ;
}
exports.ResponseError = ResponseError;
class ResponsePaginationSuccess {
    constructor(infoMessage, data, pagination_options, statusCode, notLog) {
        this.success = true;
        this.message = infoMessage;
        this.data = data;
        this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 200;
        this.pagination_options = pagination_options;
        if (!notLog) {
            try {
                var offuscateRequest = JSON.parse(JSON.stringify(data));
                if (offuscateRequest && offuscateRequest.token)
                    offuscateRequest.token = "*******";
                console.log(new Date().toString() + ' - [Response]: ' + JSON.stringify(offuscateRequest));
            }
            catch (error) { }
        }
        ;
    }
    ;
}
exports.ResponsePaginationSuccess = ResponsePaginationSuccess;
class ResponseSuccess {
    constructor(infoMessage, data, statusCode, notLog) {
        this.success = true;
        this.message = infoMessage;
        this.data = data;
        this.statusCode = typeof statusCode !== 'undefined' ? statusCode : 200;
        if (!notLog) {
            try {
                var offuscateRequest = JSON.parse(JSON.stringify(data));
                if (offuscateRequest && offuscateRequest.token)
                    offuscateRequest.token = "*******";
                console.log(new Date().toString() + ' - [Response]: ' + JSON.stringify(offuscateRequest));
            }
            catch (error) { }
        }
        ;
    }
    ;
}
exports.ResponseSuccess = ResponseSuccess;
//# sourceMappingURL=response.dto.js.map