import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Facility } from 'src/facility/entities/facility.entity';
import { Like, Repository, Raw } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/jobs.entity';
import { JobsCategoryService } from './jobs-category.service';

@Injectable()
export class JobService {

  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
    private readonly jobCategoryService: JobsCategoryService

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
      let newCat: any = await this.jobCategoryService.create({ title: createTourDto.category, order: 5 })
      console.log(newCat)
      let newJob: any = this.jobsRepository.create({ ...createTourDto, job_category: newCat })
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
      const category = query.category;
      const company = query.company;
      let filter = {
        take: take,
        skip: skip
      };
      let whereClause = {};
      if (category) {

        whereClause['category'] = Raw(alias => `${alias} ILIKE '%${category}%'`);
      }
      if (company) {
        whereClause['companyName'] = Raw(alias => `${alias} ILIKE '%${company}%'`);
      }
      if (Object.keys(whereClause).length > 0) {
        filter['where'] = { ...whereClause }
      }
      const [result, total] = await this.jobsRepository.findAndCount(
        {
          ...filter,
          order: { created_at: "DESC" },
          relations: { job_category: true }
        }
      );
      return { page: page, limit: take, total: total, result: result };
    } catch (error) {
      console.log("here")
      return error;
    }
  }
  async count(): Promise<any> {
    try {
      const totalJObs = await this.jobsRepository.count();
      return totalJObs;
    } catch (error) {
      return false;
    }
  }


  async findOne(id: string) {
    try {

      const result = await this.jobsRepository.findOne(
        {
          relations: {
            job_category: true
          },
          where:
            { id: id }
        }
      );
      return { success: true, result: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteByCategory() {
    try {

      const result = await this.jobsRepository.createQueryBuilder()
        .delete()
        .from(Job)
        .where("category = :id", { id: 'doctor' })
        .execute();
      return { success: true, result: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }


  async getCategories() {
    try {
      const res = await this.jobCategoryService.find();
      return res;
    } catch (error) {
      console.log("here")
      return error;
    }
  }

  async getCompanies() {
    try {
      const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('job.companyName', 'company')
        .addSelect('COALESCE(job.thumbnail, \'\')', 'thumbnail')
        .addSelect('COUNT(job.id)', 'jobs')
        .groupBy('job.companyName,thumbnail')
        .orderBy('jobs', 'DESC');
      const result = await queryBuilder.getRawMany();

      const combinedJobs = result.reduce((acc, curr) => {
        const existingCompany = acc.find(item => item.company === curr.company);
        if (existingCompany) {
          existingCompany.jobs = Number(existingCompany.jobs) + Number(curr.jobs);
          if (curr.thumbnail) {
            existingCompany.thumbnail = curr.thumbnail;
          }
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
      return combinedJobs;

    } catch (error) {
      console.log("here")
      return error;
    }
  }


  async getLatestJobs() {
    try {
      const result = await this.jobsRepository.query(`
      SELECT *
        FROM (
          SELECT *,
                 ROW_NUMBER() OVER (PARTITION BY "jobCategoryId" ORDER BY created_at) AS order_number
          FROM public.job
        ) AS j
        JOIN public.job_category jc ON j."jobCategoryId" = jc.id
        WHERE j.order_number <= 20
      `);
      return result;

    } catch (error) {
      console.log("here")
      return error;
    }
  }


  async getJobsCountByCategory() {
    try {
      const result = await this.jobsRepository.query(`
        SELECT c.title AS category, COUNT(j.id) AS jobs
        FROM public.job j
        INNER JOIN job_category c ON j."jobCategoryId" = c.id 
        GROUP BY c.title
      `);
      return result;

    } catch (error) {
      console.log("here")
      return error;
    }
  }

}
