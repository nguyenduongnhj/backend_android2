import { SetMetadata } from '@nestjs/common';
import { AuthConstants } from '../enum/auth-constants.enum';
import { RoleType } from '../enum/role-type.enum';

export const HasRoles = (...roles: RoleType[]) => SetMetadata(AuthConstants.HAS_ROLES_KEY, roles);
