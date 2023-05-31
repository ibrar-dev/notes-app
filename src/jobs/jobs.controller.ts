import { Controller, Res, Get, Delete, Post, Body, HttpStatus, Param, Query, ParseIntPipe } from '@nestjs/common';
import { JobService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { JobsResponse } from './dto/response-job.dto';
import { Response } from 'express';
import { ApiExtraModels, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) { }
  @ApiTags('Job')
  @ApiExtraModels(JobsResponse)
  @ApiResponse({
    schema: {
      '$ref': getSchemaPath(JobsResponse)
    }
  })

  @ApiQuery({ name: 'category', required: false, type: String })
  @ApiQuery({ name: 'company', required: false, type: String })
  @ApiQuery({ name: 'time', required: false, type: String })
  @ApiQuery({ name: 'type', required: false, type: String })
  @Get()
  async findAll(@Res() res: Response,
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('category') category?: string,
    @Query('company') company?: string,
    @Query('time') time?: string,
    @Query('type') type?: string,

  ): Promise<any> {
    try {
      let resp = await this.jobService.findAll({ page, limit, category, company ,time,type});
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')
  @Get('job-categories')
  async getJobTitles(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.getCategories();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')
  @Get('get-types')
  async getTypes(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.getTypes();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')
  @Get('job-count-by-categories')
  async getJobCountByCategory(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.getJobsCountByCategory();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      console.log("here", error.message)
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')
  @Get('latest-jobs')
  async getLatestJobs(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.getLatestJobs();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      console.log("here", error.message)
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Companies')

  @Get('companies')
  async getCompanies(@Res() res: Response,
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<any> {
    try {
      let resp = await this.jobService.getCompanies({ page, limit });
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
      }
    } catch (error) {
      console.log("here", error.message)
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Companies')

  @Get('companies-count')
  async totalCompanies(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.totalCompanies();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
      }
    } catch (error) {
      console.log("here", error.message)
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Companies')

  @Get('top-companies')
  async getTopCompanies(@Res() res: Response
  ): Promise<any> {
    try {
      let resp = await this.jobService.getTopCompanies();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
      }
    } catch (error) {
      console.log("here", error.message)
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')

  @Get('count')
  async count(@Res() res: Response,
  ): Promise<any> {
    try {
      let resp = await this.jobService.count();
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }
  @ApiTags('Job')

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id') id: string) {

    try {
      if (id) {
        let resp = await this.jobService.findOne(id);
        if (resp.success) {
          res.status(HttpStatus.OK).json(resp);
        } else {
          res.status(HttpStatus.BAD_REQUEST).json({ message: 'No Record found with this ID' });
        }
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({ message: 'Please Enter a valid ID' });
      }

    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }

  }

  // delete "Doctors"
  @Delete()
  async deleteByCategory(@Res() res: Response) {

    try {

      let resp = await this.jobService.deleteByCategory();
      return resp;
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }

  }
}
