import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Facility } from 'src/facility/entities/facility.entity';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/jobs.entity';

@Injectable()
export class JobService {

  constructor(
    @InjectRepository(Job)
    private readonly toursRepository: Repository<Job>,
    // private  facilitiesRepository: Repository<Facility>,
  ) { }

  async create(createTourDto: CreateJobDto): Promise<Job> {
    try {
      let newTour: any = this.toursRepository.create(createTourDto)
      return this.toursRepository.save(newTour);
    } catch (error) {
      return error;
    }
  }
  async createFromCronJob(createTourDto: CreateJobDto): Promise<any> {
    try {
      let newTour: any = this.toursRepository.create(createTourDto)
      await this.toursRepository.save(newTour);
      return true;
    } catch (error) {
      return false;
    }
  }


  findAll(): Promise<Job[]> {
    try {
      let newUser = this.toursRepository.find()
      return newUser;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} tour`;
  }

  update(id: number, updateTourDto: UpdateJobDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: number) {
    return `This action removes a #${id} tour`;
  }
}
