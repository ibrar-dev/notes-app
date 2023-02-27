import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';
import { JobModule } from './jobs/jobs.module';
import { Job } from './jobs/entities/jobs.entity';
import { QualificationModule } from './qualification/qualifications.module';
import { Qualifications } from './qualification/entities/qualifications.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      host: 'localhost',
      password: '1234',
      database: 'jobs',
      entities: [User, Qualifications, Job],
      synchronize: true,
      type: 'postgres',
      port: 5432,
      username: 'bobby',
    }),
    AuthModule, UsersModule, QualificationModule, JobModule, TaskModule],
  controllers: [AppController, UsersController],
  providers: [AppService],

})
export class AppModule { }




