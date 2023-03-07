"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Jobs API')
        .setDescription('Jobs API ')
        .setVersion('1.0')
        .addTag('Jobs')
        .addBearerAuth()
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        allowedHeaders: "*",
        origin: "*"
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', ''));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map