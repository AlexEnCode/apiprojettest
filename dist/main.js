"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    appConfig(app);
    initSwagger(app);
    await app.listen(3000);
}
function appConfig(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
}
function initSwagger(app) {
    swagger_1.SwaggerModule.setup('api', app, swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder().build()));
}
bootstrap();
//# sourceMappingURL=main.js.map