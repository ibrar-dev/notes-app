import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QualificationService } from './qualifications.service';
import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('qualifications')
export class QualificationController {
  constructor(private readonly qualificationService: QualificationService) { }
  @ApiExcludeEndpoint()
  @Post()
  create(@Body() createQualificationDto: CreateQualificationDto) {
    return this.qualificationService.create(createQualificationDto);
  }

  @ApiExcludeEndpoint()
  @Get()
  findAll() {
    return this.qualificationService.findAll();
  }
  @ApiExcludeEndpoint()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qualificationService.findOne(+id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacilityDto: UpdateQualificationDto) {
    return this.qualificationService.update(+id, updateFacilityDto);
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qualificationService.remove(+id);
  }
}
