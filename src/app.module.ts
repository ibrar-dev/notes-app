import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/users.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { SharedModule } from './shared/shared.module';
import { Note } from './notes/entity/notes.entity';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      host: 'localhost',
      password: 'postgres',
      database: 'taskDB',
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
