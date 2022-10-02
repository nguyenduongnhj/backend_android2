"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasRoles = void 0;
const common_1 = require("@nestjs/common");
const auth_constants_enum_1 = require("../enum/auth-constants.enum");
const HasRoles = (...roles) => common_1.SetMetadata(auth_constants_enum_1.AuthConstants.HAS_ROLES_KEY, roles);
exports.HasRoles = HasRoles;
//# sourceMappingURL=has-roles.decorator.js.map