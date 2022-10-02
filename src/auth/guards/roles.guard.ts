import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthConstants } from '../../commons/enum/auth-constants.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>(AuthConstants.HAS_ROLES_KEY, context.getHandler());

    // if not roles => return true
    if (!roles || roles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const { user } = req;
    const hasRole = () => user.roles.some(( role: any) => roles.indexOf(role)> -1);
    var hasPermission = false;

    if(hasRole()){
      hasPermission = true;
      if(req.params.email || req.body.email) {
        if(req.user.email != req.params.email && req.user.email != req.body.email){ 
          hasPermission = false;
        }
      }
    } 
    return user && user.roles && hasPermission;
  }
}
