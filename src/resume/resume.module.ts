import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';
import { Resume } from './entities/resume.entity';
import { Email } from './entities/email.entity';
import { Website } from './entities/website.entity';
import { Salary } from './entities/salary.entity';
import { Address } from './entities/address.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Resume,Phone,Email,Website,Salary,Address])],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
