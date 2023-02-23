import { Module } from '@nestjs/common';
import { QualificationService } from './qualifications.service';
import { QualificationController } from './qualifications.controller';
import { Qualifications } from './entities/qualifications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Qualifications])],
  controllers: [QualificationController],
  providers: [QualificationService]})
export class QualificationModule { }
