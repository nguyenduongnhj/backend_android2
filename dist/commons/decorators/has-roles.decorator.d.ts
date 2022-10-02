import { AuthConstants } from '../enum/auth-constants.enum';
import { RoleType } from '../enum/role-type.enum';
export declare const HasRoles: (...roles: RoleType[]) => import("@nestjs/common").CustomDecorator<AuthConstants>;
