import { Injectable } from '@nestjs/common';
import { CreateAppliedJobCategoryDto } from './dto/create-applied-job-category.dto copy';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { AppliedJobCategory } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppliedJobsCategoryService {

  constructor(
    @InjectRepository(AppliedJobCategory)
    private readonly appliedJobsService: Repository<AppliedJobCategory>) { }

  async create(createAppliedJobDto: CreateAppliedJobCategoryDto): Promise<AppliedJobCategory> {
    try {
      let findCat: any = await this.appliedJobsService.findOne({ where: { title: createAppliedJobDto.title } })
      if (findCat) {
        console.log(findCat)
        return findCat.id;
      } else {
        let newJob: any = await this.appliedJobsService.create({ ...createAppliedJobDto })
        console.log(newJob)
        const savedJob = await this.appliedJobsService.insert(newJob);
        return savedJob.raw[0];
      }
    } catch (error) {
      console.log(error)
      return error;
    }
  }
}
