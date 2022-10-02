"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MailerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_core_module_1 = require("./mailer-core.module");
const mail_processor_1 = require("./mail.processor");
const handlebars_adapter_1 = require("./adapters/handlebars.adapter");
const config_1 = require("../../config");
let MailerModule = MailerModule_1 = class MailerModule {
    static forRoot() {
        return {
            module: MailerModule_1,
            imports: [
                mailer_core_module_1.MailerCoreModule.forRoot({
                    transport: {
                        host: config_1.default.mail.host,
                        port: config_1.default.mail.port,
                        secure: config_1.default.mail.secure === true,
                        ignoreTLS: config_1.default.mail.secure !== false,
                        auth: {
                            user: config_1.default.mail.user,
                            pass: config_1.default.mail.pass,
                        },
                    },
                    template: {
                        dir: `${process.cwd()}/templates/`,
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: false,
                        },
                    },
                })
            ],
            providers: [
                mail_processor_1.MailProcessor
            ]
        };
    }
    static forRootAsync(options) {
        return {
            module: MailerModule_1,
            imports: [
                mailer_core_module_1.MailerCoreModule.forRootAsync(options),
            ],
        };
    }
};
MailerModule = MailerModule_1 = __decorate([
    common_1.Module({})
], MailerModule);
exports.MailerModule = MailerModule;
//# sourceMappingURL=mailer.module.js.map