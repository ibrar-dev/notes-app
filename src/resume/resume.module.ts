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
import { ResumeQualification } from './entities/resumeQualification.entity';
import { Certificate } from 'crypto';
import { skip } from 'rxjs';
import { Skills } from './entities/skills.entity';
import { RelatedSkills } from './entities/relatedSkills.entity';
import { Experience } from './entities/experience.entity';
import { Projects } from './entities/projects.entity';
import { Publication } from './entities/publications.entity';
import { Location } from './entities/location.entity';
import { Achievement } from './entities/achievement.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Resume,Phone,Email,Website,Salary,Address,ResumeQualification,Certificate,Skills,RelatedSkills,Experience,Projects,Publication,Location,Achievement])],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
