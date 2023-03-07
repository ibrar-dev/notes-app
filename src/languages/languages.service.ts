import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private readonly resumeRepository: Repository<Language>,
  ) { }

  create(createLanguageDto: CreateLanguageDto) {
    return 'This action adds a new language';
  }

  async findAll() {
    try {
      const take = 10
      const page = 1;
      const skip = (page - 1) * take;
      const res = await this.resumeRepository.find();
      return { page: page, limit: take, result: res };
    } catch (error) {
      console.log("here")
      return error;
    }
  }

  async getUNique() {
    try {
      const res = await  this.resumeRepository
      .createQueryBuilder('languages')
      .select('DISTINCT languages.title, languages.code')
      .getRawMany();
      return { result: res };
    } catch (error) {
      console.log("here")
      return error;
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
