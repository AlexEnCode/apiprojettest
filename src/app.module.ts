import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { LibraryModule } from './library/library.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({

  imports: [OrdersModule, ProductsModule, UsersModule, LibraryModule, ScheduleModule],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
