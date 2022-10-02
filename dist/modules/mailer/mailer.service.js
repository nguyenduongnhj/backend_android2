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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const lodash_1 = require("lodash");
const common_1 = require("@nestjs/common");
const previewEmail = require("preview-email");
const mailer_constant_1 = require("./constants/mailer.constant");
const mailer_transport_factory_1 = require("./mailer-transport.factory");
const user_model_1 = require("../../database/models/user.model");
const bull_1 = require("@nestjs/bull");
const config_1 = require("../../config");
let MailerService = class MailerService {
    constructor(mailerOptions, transportFactory, mailQueue) {
        this.mailerOptions = mailerOptions;
        this.transportFactory = transportFactory;
        this.mailQueue = mailQueue;
        this.transporters = new Map();
        if (!transportFactory) {
            this.transportFactory = new mailer_transport_factory_1.MailerTransportFactory(mailerOptions);
        }
        if ((!mailerOptions.transport ||
            Object.keys(mailerOptions.transport).length <= 0) &&
            !mailerOptions.transports) {
            throw new Error('Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance.');
        }
        const templateAdapter = lodash_1.get(this.mailerOptions, 'template.adapter');
        if (this.mailerOptions.preview) {
            const defaults = { open: { wait: false } };
            this.mailerOptions.preview =
                typeof this.mailerOptions.preview === 'boolean'
                    ? defaults
                    : lodash_1.defaultsDeep(this.mailerOptions.preview, defaults);
        }
        if (mailerOptions.transports) {
            Object.keys(mailerOptions.transports).forEach((name) => {
                this.transporters.set(name, this.transportFactory.createTransport(this.mailerOptions.transports[name]));
                this.initTemplateAdapter(templateAdapter, this.transporters.get(name));
            });
        }
        if (mailerOptions.transport) {
            this.transporter = this.transportFactory.createTransport();
            this.initTemplateAdapter(templateAdapter, this.transporter);
        }
    }
    initTemplateAdapter(templateAdapter, transporter) {
        if (templateAdapter) {
            transporter.use('compile', (mail, callback) => {
                if (mail.data.html) {
                    return callback();
                }
                return templateAdapter.compile(mail, callback, this.mailerOptions);
            });
            if (this.mailerOptions.preview) {
                transporter.use('stream', (mail, callback) => {
                    return previewEmail(mail.data, this.mailerOptions.preview)
                        .then(() => callback())
                        .catch(callback);
                });
            }
        }
    }
    async sendMail(sendMailOptions) {
        if (sendMailOptions.transporterName) {
            if (this.transporters &&
                this.transporters.get(sendMailOptions.transporterName)) {
                return await this.transporters
                    .get(sendMailOptions.transporterName)
                    .sendMail(sendMailOptions);
            }
            else {
                throw new ReferenceError(`Transporters object doesn't have ${sendMailOptions.transporterName} key`);
            }
        }
        else {
            if (this.transporter) {
                return await this.transporter.sendMail(sendMailOptions);
            }
            else {
                throw new ReferenceError(`Transporter object undefined`);
            }
        }
    }
    async sendVerificationEmail(user, token) {
        try {
            console.log(config_1.default.app.url);
            const url = `${config_1.default.app.url}/auth/email/verify/${token}`;
            await this.mailQueue.add('verification', {
                user,
                url,
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
MailerService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(mailer_constant_1.MAILER_OPTIONS)),
    __param(1, common_1.Optional()),
    __param(1, common_1.Inject(mailer_constant_1.MAILER_TRANSPORT_FACTORY)),
    __param(2, bull_1.InjectQueue('mailer')),
    __metadata("design:paramtypes", [Object, Object, Object])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map