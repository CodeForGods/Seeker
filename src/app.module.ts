import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { environmentVariables } from './utils/env';

@Module({
  imports: [
    JobsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(environmentVariables('MONGODB_URL')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
