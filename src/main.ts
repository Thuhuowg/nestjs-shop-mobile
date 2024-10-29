import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConfig } from './database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
DbConfig.initialize()
  .then(()=>{
    console.log("Connected successful")
  })
  .catch((error) => console.log(error))
