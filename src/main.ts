declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConfig } from './database';
import * as express from 'express'; // Express để cấu hình tài nguyên tĩnh


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*', // Thay thế bằng URL của client
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(express.json());
  
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
DbConfig.initialize()
  .then(()=>{
    console.log("Connected successful")
  })
  .catch((error) => console.log(error))
