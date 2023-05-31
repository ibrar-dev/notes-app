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
      if (newCat) {
        let newJob: any = this.jobsRepository.create({ ...createTourDto, job_category: newCat })
        await this.jobsRepository.save(newJob);
      }
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
      const time = query.time;
      const type = query.type;
      let filter = {
        take: take,
        skip: skip
      };
      let whereClause = {};
      if (time) {
        whereClause['postedDate'] = Raw(alias =>
          time.includes('hour') ?
            `${alias} BETWEEN CURRENT_TIMESTAMP - INTERVAL '${time}' AND CURRENT_TIMESTAMP`
            : `${alias} BETWEEN CURRENT_DATE - INTERVAL '${time}' AND CURRENT_DATE + INTERVAL '1 day'`
        );
      }

      if (category) {
        whereClause['category'] = Raw(alias => `${alias} ILIKE '%${category}%'`);
      }
      if (type) {
        whereClause['scheduleType'] = Raw(alias => `${alias} ILIKE '%${type}%'`);
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

  async getTypes() {

    try {
      const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('DISTINCT job.scheduleType', 'scheduleType')

      const result = await queryBuilder.getRawMany();

      return { result: result };
    } catch (error) {
      console.log("Error:", error);
      return error;
    }
  }
  async getCompanies(query) {

    try {
      const take = query.limit || 10
      const page = query.page || 1;
      const skip = (page - 1) * take;
      const totalCountQueryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('COUNT(DISTINCT job.companyName)', 'count');
      const { count: totalCount } = await totalCountQueryBuilder.getRawOne();

      const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('job.companyName', 'company')
        .addSelect('COALESCE(job.thumbnail, \'\')', 'thumbnail')
        .addSelect('COUNT(job.id)', 'jobs')
        .groupBy('job.companyName,thumbnail')
        .orderBy('jobs', 'DESC')
        .skip(skip) // Add skip method to skip the first 10 records
        .take(take);

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

      return { page: page, limit: take, total: totalCount, result: combinedJobs };
    } catch (error) {
      console.log("Error:", error);
      return error;
    }
  }

  async totalCompanies() {
    try {
      const totalCountQueryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('COUNT(DISTINCT job.companyName)', 'count');
      const { count: totalCount } = await totalCountQueryBuilder.getRawOne();

      return totalCount;
    } catch (error) {
      console.log("Error:", error);
      return error;
    }
  }
  async getTopCompanies() {
    try {
      const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
        .select('job.companyName', 'company')
        .addSelect('COALESCE(job.thumbnail, \'\')', 'thumbnail')
        .addSelect('COUNT(job.id)', 'jobs')
        .groupBy('job.companyName,thumbnail')
        .orderBy('jobs', 'DESC')
        .take(20); // Limit the results to only the top 20 companies

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
      console.log("Error:", error);
      return error;
    }
  }
  async getLatestJobs() {
    try {
      const result = await this.jobsRepository.query(`
      SELECT j.id, j.title, j."companyName", j.location, j.via, j.description, j.thumbnail, j."applyLink", j."postedAt", j."scheduleType", j."applyLinkTitle", j.salary, j."workFromHome", j.responsibilities, j.qualifications, j.category, j."jobCategoryId", j."postedDate", j.created_at, j.updated_at
       FROM (
          SELECT *,
                 ROW_NUMBER() OVER (PARTITION BY "jobCategoryId" ORDER BY created_at DESC) AS order_number
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
