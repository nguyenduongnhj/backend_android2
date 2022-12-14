"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_constants_enum_1 = require("../../commons/enum/auth-constants.enum");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const roles = this.reflector.get(auth_constants_enum_1.AuthConstants.HAS_ROLES_KEY, context.getHandler());
        if (!roles || roles.length === 0)
            return true;
        const req = context.switchToHttp().getRequest();
        const { user } = req;
        const hasRole = () => user.roles.some((role) => roles.indexOf(role) > -1);
        var hasPermission = false;
        if (hasRole()) {
            hasPermission = true;
            if (req.params.email || req.body.email) {
                if (req.user.email != req.params.email && req.user.email != req.body.email) {
                    hasPermission = false;
                }
            }
        }
        return user && user.roles && hasPermission;
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map