import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Jobs API')
    .setDescription('Jobs API ')
    .setVersion('1.0')
    .addTag('Jobs')
    .addBearerAuth()
    .build();


  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
});
app.useStaticAssets(join(__dirname, '..', ''));
  await app.listen(3000);
}
bootstrap();




