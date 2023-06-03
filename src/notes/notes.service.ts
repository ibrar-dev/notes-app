import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entity/notes.entity';


@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) { }

  async   create(createUserDto: any) {
    try {
     return await this.notesRepository.save(createUserDto)
    } catch (error) {
      console.log(error)
      return error;
    }

  }

  // async findUserWithEmail(email: string) {
  //   console.log(email)
  //   return this.notesRepository.findOne( {where: {
  //     email
  //   }});
  // }

  
  async update(updateNotesDto: any, userId, id): Promise<Note> {
    try {
      await this.notesRepository
    .createQueryBuilder()
    .update(Note)
    .set(updateNotesDto)
    .where({id, userId})
    .execute();
    let updatedUser = await this.notesRepository.findOneBy({ id })


      console.log(updatedUser)
      return updatedUser;
    } catch (error) {
      return error;
    }

  }

  async findAll(userId): Promise<Note[]> {
    return this.notesRepository.find({
      where: {
        userId
      }
    });
  }

  async findOne(id: string, userId): Promise<Note> {
    return this.notesRepository.findOne({
      where: {
        id,
        userId
      }
    });
  }



  async remove(id: string, userId): Promise<void> {
    await this.notesRepository.delete({id, userId});
  }
  
}