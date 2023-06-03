import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  HttpStatus,
  Patch,
  ValidationPipe,
  Query
} from '@nestjs/common';

import {
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { UserId } from 'src/shared/user-id.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FilterDto } from './dto/filter.dto';
import { NoteCreateDto, NoteUpdateDto } from './dto/noteCreate.dto';

@Controller('note')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }
 
 

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @UserId('userId') userId): Promise<any> {
    try {
      return this.notesService.findOne(id, userId);
    } catch(error) {
      return error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@UserId('userId') userId: string, @Query(ValidationPipe) filterDto: FilterDto ): Promise<any> {
    try {
      return this.notesService.findAllofUser(userId, filterDto);
    } catch(error) {
      return error;
    }
  }
  
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: NoteCreateDto, @UserId('userId') userId: string): Promise<any> {
    try {
      body.userId =userId;
      const u = await this.notesService.create(body)
      return u;
    } catch (error) {
     return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() createNoteDto: NoteUpdateDto, @UserId('userId') userId: string) {
    try {
      return this.notesService.update(createNoteDto, userId, id );
    } catch(error) {
      return error;
    }
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @UserId('userId') userId: string): Promise<any> {
    try {
      await this.notesService.remove(id,userId);
      return { statusCode: HttpStatus.OK,  message: 'Successfuly Delete.' };
    } catch(error) {
      return error;
    }
  }

}

