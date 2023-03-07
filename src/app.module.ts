import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { User } from './users/entity/users.entity';
import { JobModule } from './jobs/jobs.module';
import { Job } from './jobs/entities/jobs.entity';
import { QualificationModule } from './qualification/qualifications.module';
import { Qualifications } from './qualification/entities/qualifications.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';
import { ResumeModule } from './resume/resume.module';
import { LanguagesModule } from './languages/languages.module';
import { Resume } from './resume/entities/resume.entity';
import { Language } from './languages/entities/language.entity';
import { Phone } from './resume/entities/phone.entity';
import { Email } from './resume/entities/email.entity';
import { Website } from './resume/entities/website.entity';
import { Salary } from './resume/entities/salary.entity';
import { Address } from './resume/entities/address.entity';

@Module({
  imports: [ScheduleModule.forRoot(),
  TypeOrmModule.forRoot({
    host: 'ec2-3-21-254-99.us-east-2.compute.amazonaws.com',
    password: '1234',
    database: 'jobs',
    entities: [User, Qualifications, Job, Resume, Language, Phone,Email,Website,Salary,Address],
    synchronize: true,
    type: 'postgres',
    port: 5432,
    username: 'bobby',

    // host: 'localhost',
    // password: '1234',
    // database: 'jobs',
    // entities: [User, Qualifications, Job, Resume, Language, Phone,Email,Website,Salary,Address],
    // synchronize: true,
    // type: 'postgres',
    // port: 5433,
    // username: 'postgres',

  }),
    AuthModule, UsersModule, QualificationModule, JobModule, TaskModule, ResumeModule, LanguagesModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService],

})
export class AppModule { }







//local postgres/cred

// TypeOrmModule.forRoot({
//   host: 'localhost',
//   password: '1234',
//   database: 'postgres',
//   entities: [User, Qualifications, Job],
//   synchronize: true,
//   type: 'postgres',
//   port: 5433,
//   username: 'postgres',
// }),


// server credentials
// host: 'ec2-3-21-254-99.us-east-2.compute.amazonaws.com',
// password: '1234',
// database: 'jobs',
// entities: [User, Qualifications, Job],
// synchronize: true,
// type: 'postgres',
// port: 5432,
// username: 'bobby',