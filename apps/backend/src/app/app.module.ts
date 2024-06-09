import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

/* eslint-disable */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
