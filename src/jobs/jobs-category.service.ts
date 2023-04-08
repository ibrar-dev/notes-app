import { Injectable } from '@nestjs/common';
import { CreateAppliedJobCategoryDto } from './dto/create-applied-job-category.dto copy';
import { JobCategory } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobsCategoryService {

  constructor(
    @InjectRepository(JobCategory)
    private readonly jobsService: Repository<JobCategory>) { }

  async create(createAppliedJobDto: CreateAppliedJobCategoryDto): Promise<JobCategory> {
    try {
      let findCat: any = await this.jobsService.findOne({ where: { title: createAppliedJobDto.title } })
      if (findCat) {
        console.log(findCat)
        return findCat.id;
      } else {
        let newJob: any = await this.jobsService.create({ ...createAppliedJobDto })
        console.log(newJob)
        const savedJob = await this.jobsService.insert(newJob);
        return savedJob.raw[0];
      }
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  async find() {
    try {
      const result = await this.jobsService.find();
      return { success: true, result: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async getCountSubQuery(sabQuery) {
    try {
      const result = await this.jobsService.find();

      
      return { success: true, result: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
