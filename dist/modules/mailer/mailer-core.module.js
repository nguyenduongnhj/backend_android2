"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MailerCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerCoreModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_constant_1 = require("./constants/mailer.constant");
const mailer_service_1 = require("./mailer.service");
const bull_1 = require("@nestjs/bull");
const config_1 = require("../../config");
let MailerCoreModule = MailerCoreModule_1 = class MailerCoreModule {
    static forRoot(options) {
        const MailerOptionsProvider = {
            provide: mailer_constant_1.MAILER_OPTIONS,
            useValue: options,
        };
        return {
            module: MailerCoreModule_1,
            providers: [
                MailerOptionsProvider,
                mailer_service_1.MailerService,
            ],
            exports: [
                mailer_service_1.MailerService,
            ],
            imports: [
                bull_1.BullModule.registerQueue({
                    name: config_1.default.mail.queue.name,
                    redis: {
                        host: config_1.default.mail.queue.host,
                        port: config_1.default.mail.queue.port,
                    },
                }),
            ]
        };
    }
    static forRootAsync(options) {
        const providers = this.createAsyncProviders(options);
        return {
            module: MailerCoreModule_1,
            providers: [
                ...providers,
                mailer_service_1.MailerService,
            ],
            imports: options.imports,
            exports: [
                mailer_service_1.MailerService,
            ],
        };
    }
    static createAsyncProviders(options) {
        const providers = [this.createAsyncOptionsProvider(options)];
        if (options.useClass) {
            providers.push({
                provide: options.useClass,
                useClass: options.useClass,
            });
        }
        return providers;
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                name: mailer_constant_1.MAILER_OPTIONS,
                provide: mailer_constant_1.MAILER_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            name: mailer_constant_1.MAILER_OPTIONS,
            provide: mailer_constant_1.MAILER_OPTIONS,
            useFactory: async (optionsFactory) => {
                return optionsFactory.createMailerOptions();
            },
            inject: [options.useExisting || options.useClass],
        };
    }
};
MailerCoreModule = MailerCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], MailerCoreModule);
exports.MailerCoreModule = MailerCoreModule;
//# sourceMappingURL=mailer-core.module.js.map