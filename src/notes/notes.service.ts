import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entity/notes.entity';
import { NoteCreateDto, NoteUpdateDto } from './dto/noteCreate.dto';


@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) { }

  async create(body: NoteCreateDto) {
    try {
     return await this.notesRepository.save(body)
    } catch (error) {
      return error;
    }

  }

  
  async update(updateNotesDto: NoteUpdateDto, userId, id): Promise<Note> {
    try {
      await this.notesRepository
    .createQueryBuilder()
    .update(Note)
    .set(updateNotesDto)
    .where({id, userId})
    .execute();
    const updatedNotes = await this.notesRepository.findOneBy({ id })
      return updatedNotes;
    } catch (error) {
      return error;
    }

  }

  async findAllofUser(userId, filterObject): Promise<Note[]> {
    return this.notesRepository.find({
      where: {
        ...filterObject,
        userId
      }
    });
  }

  async filter(userId): Promise<Note[]> {
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