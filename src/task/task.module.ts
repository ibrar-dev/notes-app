import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { JobModule } from 'src/jobs/jobs.module';

@Module({
  providers: [TaskService],
  imports: [JobModule],

})
export class TaskModule {}
