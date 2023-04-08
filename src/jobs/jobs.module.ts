import { Module } from '@nestjs/common';
import { JobService } from './jobs.service';
import { JobController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/jobs.entity';
import { JobCategory } from './entities/category.entity';
import { JobsCategoryService } from './jobs-category.service';
// import { Facility } from 'src/facility/entities/facility.entity';
// import { FacilityModule } from 'src/facility/facility.module';


@Module({
  imports: [TypeOrmModule.forFeature([Job,JobCategory])],
  controllers: [JobController],
  providers: [JobService,JobsCategoryService],
  exports: [JobService],
})
export class JobModule {}

