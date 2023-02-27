import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Facility } from 'src/facility/entities/facility.entity';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/jobs.entity';

@Injectable()
export class JobService {

  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) { }

  async create(createTourDto: CreateJobDto): Promise<Job> {
    try {
      let newJob: any = this.jobsRepository.create(createTourDto)
      return this.jobsRepository.save(newJob);
    } catch (error) {
      return error;
    }
  }
  async createFromCronJob(createTourDto: CreateJobDto): Promise<any> {
    try {
      let newJob: any = this.jobsRepository.create(createTourDto)
      await this.jobsRepository.save(newJob);
      return true;
    } catch (error) {
      return false;
    }
  }


  async findAll(query: any): Promise<any> {
    try {
      const take = query.limit || 10
      const page = query.page || 1;
      const skip = (page - 1) * take;
      const [result, total] = await this.jobsRepository.findAndCount(
        {
          order: { id: "DESC" },
          take: take,
          skip: skip
        }
      );
      return { page: page, limit: take, total: total, result: result };
    } catch (error) {
      console.log("here")
      return error;
    }
  }


  async findOne(id: string) {
    try {

      const result = await this.jobsRepository.findOne(
        {
          where:
            { id: id }
        }
      );
      return { success: true, result: result };
    } catch (error) {
      return { success: false, error:error.message };
    }
  }

}
