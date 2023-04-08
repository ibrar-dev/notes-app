import { Module } from '@nestjs/common';
import { AppliedJobsService } from './applied-jobs.service';
import { AppliedJobsController } from './applied-jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppliedJob } from "./entities/applied-job.entity"
import { AppliedJobCategory } from "./entities/category.entity"
import { AppliedJobsCategoryService } from './applied-jobs-categories.service';
@Module({
  controllers: [AppliedJobsController],
  providers: [AppliedJobsService,AppliedJobsCategoryService],
  imports: [TypeOrmModule.forFeature([AppliedJob, AppliedJobCategory])],

})
export class AppliedJobsModule { }
