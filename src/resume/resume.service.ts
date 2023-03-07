import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
// import { Facility } from 'src/facility/entities/facility.entity';
import { Repository } from 'typeorm';
// import { CreateJobDto } from './dto/create-job.dto';
import { Resume } from './entities/resume.entity';
import { Language } from 'src/languages/entities/language.entity';
var fs = require('fs');


@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resumeRepository: Repository<Resume>,
  ) { }

  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    try {

      let newJob: any = this.resumeRepository.create({ ...createResumeDto })
      console.log(newJob)
      let aw = await this.resumeRepository.save(newJob);
      console.log("Reee", aw)
      return aw;
    } catch (error) {
      return error;
    }
  }
  // create(createResumeDto: CreateResumeDto) {
  //   return 'This action adds a new resume';
  // }

  // findAll() {
  //   return `This action returns all resume`;
  // }
  async findAll(): Promise<any> {
    try {
      let newUser = await this.resumeRepository.find(
        {
          relations: {
            languages: true,
            phone: true
          }
        }
      )
      return { result: newUser };
    } catch (error) {
      console.log("here", error)
      return error;
    }
  }

  async findOne(id: string) {
    try {

      const res = await this.resumeRepository.findOne({
        where: {
          id: id,
        },
        relations: {
          languages: true,
          phone: true,
          email: true,
          website: true, currentSalary: true
        }
      })

      return { result: res };
    } catch (error) {
      console.log("here", error)
      return error;
    }
  }

  update(id: number, updateResumeDto: UpdateResumeDto) {
    return `This action updates a #${id} resume`;
  }

  remove(id: number) {
    return `This action removes a #${id} resume`;
  }
  async uploadResume(res: any) {
    console.log(res)
      let data = fs.readFileSync(`./uploads/`+res.file);

    console.log(data.toString('base64'));
    return data.toString('base64');
  }
}
