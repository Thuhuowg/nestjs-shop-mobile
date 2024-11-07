import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfigOptions } from './database';
import { ProductModule } from './modules/products/Product.module';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auths/auth.module';
import { MulterModule } from '@nestjs/platform-express';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OrderModule } from './modules/orders/order.module';
import { StripeModule } from './modules/stripes/stripe.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Đường dẫn tới thư mục chứa ảnh
      serveRoot: '/uploads', // Đường dẫn mà người dùng sẽ truy cập từ frontend
    }),
    TypeOrmModule.forRoot(DbConfigOptions),
    ProductModule,
    UserModule,
    AuthModule,
    OrderModule,
    StripeModule
  ],

})
export class AppModule {}
