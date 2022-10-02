import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = (exception instanceof HttpException) ? exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === HttpStatus.CONFLICT){
      return response.status(200)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: exception.message
        });
    }

    if (status === HttpStatus.BAD_REQUEST){
      let message = JSON.stringify(exception.getResponse());
      return response.status(200)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: JSON.parse(message)['message'],
          error: exception.message
        });
    }

    if (status === HttpStatus.FORBIDDEN){
      return response.status(200)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: "COMMON.FORBIDDEN"
        });
    }
    // if (status === HttpStatus.UNAUTHORIZED) 
    //     return response.status(status).render('views/401');
    // if (status === HttpStatus.NOT_FOUND) 
    //     return response.status(status).render('views/404');
    // if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
    //     if (process.env.NODE_ENV === 'production') {
    //       console.error(error.stack);
    //       return response.status(status).render('views/500');
    //     }
    //     else {
    //       let message = error.stack;
    //       return response.status(status).send(message); 
    //     } 
    // }


    return response
      .status(200)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message
      });
  }
}