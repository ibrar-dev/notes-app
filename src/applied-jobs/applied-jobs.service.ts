import { Injectable } from '@nestjs/common';
import { CreateAppliedJobDto } from './dto/create-applied-job.dto';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { AppliedJob } from './entities/applied-job.entity';
import { AppliedJobsCategoryService } from './applied-jobs-categories.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppliedJobsService {

  constructor(
    @InjectRepository(AppliedJob)
    private readonly appliedJobsService: Repository<AppliedJob>,
    private readonly categoryService: AppliedJobsCategoryService
    ) { }


  async create(createAppliedJobDto: CreateAppliedJobDto): Promise<AppliedJob> {
    try {

      let newCat: any = await this.categoryService.create({ ...createAppliedJobDto.category })
      console.log(newCat)
      let newJob: any = await this.appliedJobsService.create({ ...createAppliedJobDto,category:newCat })
      console.log(newJob)
      const savedJob = await this.appliedJobsService.insert(newJob);
      return savedJob.raw[0];
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  // create(createAppliedJobDto: CreateAppliedJobDto) {
  //   return 'This action adds a new appliedJob';
  // }

  async findAll(): Promise<any> {
    try {
      let allJobs = await this.appliedJobsService.find({
        relations: {
          category: true
        }
      });
      console.log("here", allJobs)
      return { result: allJobs };
    } catch (error) {
      console.log("here", error)
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} appliedJob`;
  }

  update(id: number, updateAppliedJobDto: UpdateAppliedJobDto) {
    return `This action updates a #${id} appliedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} appliedJob`;
  }
}
