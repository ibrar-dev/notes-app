import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { AppliedJobsService } from './applied-jobs.service';
import { CreateAppliedJobDto } from './dto/create-applied-job.dto';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('applied-jobs')
@Controller('applied-jobs')
export class AppliedJobsController {
  constructor(private readonly appliedJobsService: AppliedJobsService) { }

  @Post()
  async create(@Body() createAppliedJobDto: CreateAppliedJobDto, @Res() res: Response) {
    try {
      let resp = await this.appliedJobsService.create(createAppliedJobDto);
      console.log(resp)
      res.status(HttpStatus.CREATED).json({ data: resp });

    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });

    }

  }
  @Get()
  findAll() {
    return this.appliedJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appliedJobsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppliedJobDto: UpdateAppliedJobDto) {
    return this.appliedJobsService.update(+id, updateAppliedJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appliedJobsService.remove(+id);
  }
}
