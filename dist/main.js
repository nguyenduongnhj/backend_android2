"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
const express = require("express");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const all_exception_filter_1 = require("./commons/filters/all-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new all_exception_filter_1.AllExceptionsFilter());
    app.use('/storage', express.static(path_1.join(__dirname, '..', 'storage')));
    app.enableCors({
        origin: "*",
        methods: config_1.default.app.cors_options.methods
    });
    app.use(helmet());
    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.contentSecurityPolicy());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(config_1.default.app.port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map