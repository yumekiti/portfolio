import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // cors
  app.enableCors({ origin: '*' });
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  await app.listen(3000);
}
bootstrap();
