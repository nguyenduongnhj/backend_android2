"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bull_1 = require("@nestjs/bull");
const database_module_1 = require("./database/database.module");
const upload_module_1 = require("./modules/upload/upload.module");
const mailer_module_1 = require("./modules/mailer/mailer.module");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app.controller");
const auth_controller_1 = require("./auth/auth.controller");
const users_controller_1 = require("./controllers/users/users.controller");
const app_service_1 = require("./app.service");
const auth_service_1 = require("./auth/auth.service");
const users_service_1 = require("./services/users/users.service");
const all_exception_filter_1 = require("./commons/filters/all-exception.filter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            mailer_module_1.MailerModule.forRoot(),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
            bull_1.BullModule.forRoot({
                redis: {
                    host: '127.0.0.1',
                    port: 6379,
                },
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            auth_controller_1.AuthController,
            users_controller_1.UsersController,
        ],
        providers: [
            app_service_1.AppService,
            auth_service_1.AuthService,
            users_service_1.UsersService,
            all_exception_filter_1.AllExceptionsFilter,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map