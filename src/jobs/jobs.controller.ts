import { Controller, Res, Get, Post, Body, HttpStatus, Param, Query, ParseIntPipe } from '@nestjs/common';
import { JobService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { JobsResponse } from './dto/response-job.dto';
import { Response } from 'express';
import { ApiExtraModels, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) { }

  @ApiExtraModels(JobsResponse) // for CatDto to be found by getSchemaPath()
  @ApiResponse({
    schema: {
      '$ref': getSchemaPath(JobsResponse)
    }
  })

  @Get()
  async findAll(@Res() res: Response,
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<any> {
    try {
      let resp = await this.jobService.findAll({ page, limit });
      if (resp) {
        res.status(HttpStatus.OK).json(resp);
      } else {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }
  }


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

}
