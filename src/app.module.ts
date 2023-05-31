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
import { ResumeQualification } from './resume/entities/resumeQualification.entity';
import { Certification } from './resume/entities/certifications.entity';
import { Skills } from './resume/entities/skills.entity';
import { Experience } from './resume/entities/experience.entity';
import { RelatedSkills } from './resume/entities/relatedSkills.entity';
import { Projects } from './resume/entities/projects.entity';
import { Location } from './resume/entities/location.entity';
import { Publication } from './resume/entities/publications.entity';
import { Achievement } from './resume/entities/achievement.entity';
import { AppliedJobsModule } from './applied-jobs/applied-jobs.module';
import { AppliedJob } from './applied-jobs/entities/applied-job.entity';
import { AppliedJobCategory } from './applied-jobs/entities/category.entity';
import { JobCategory } from './jobs/entities/category.entity';

@Module({
  imports: [ScheduleModule.forRoot(),


  TypeOrmModule.forRoot({
    host: 'ec2-3-21-254-99.us-east-2.compute.amazonaws.com',
    password: '1234',
    database: 'jobs',
    // database: 'jobs',
    entities: [User, Qualifications, Job, Resume, Language, Phone, Email, Website, Salary, Address, ResumeQualification, Certification, Skills, Experience, RelatedSkills, Projects, Publication, Location, Achievement, AppliedJob, AppliedJobCategory,JobCategory],
    synchronize: true,
    type: 'postgres',
    port: 5432,
    username: 'bobby',

    // host: 'localhost',
    // password: '1234',
    // database: 'jobs',
    // entities: [User, Qualifications, Job, Resume, Language, Phone, Email, Website, Salary, Address, ResumeQualification, Certification, Skills, Experience, RelatedSkills, Projects, Publication, Location, Achievement, AppliedJob, AppliedJobCategory,JobCategory],
    // synchronize: true,
    // type: 'postgres',
    // port: 5433,
    // username: 'postgres',

  }),
    AuthModule, UsersModule, QualificationModule, JobModule, TaskModule, ResumeModule, LanguagesModule, AppliedJobsModule],
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
