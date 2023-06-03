import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { User } from './users/entity/users.entity';


import { ScheduleModule } from '@nestjs/schedule';


import ormconfig from './ormconfig';
import { SharedModule } from './shared/shared.module';
import { Note } from './notes/entity/notes.entity';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      host: 'localhost',
      password: 'postgres',
      database: 'test',
      entities: [User, Note],
      synchronize: true,
      type: 'postgres',
      port: 5432,
      username: 'postgres',
    }),

    AuthModule, 
    UsersModule,
    SharedModule,
    NotesModule
  ],
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
