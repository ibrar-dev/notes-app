import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,

  UseGuards,
  Request,
  Headers,
  HttpException,
  HttpStatus,
  Patch
} from '@nestjs/common';

import {
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { UserId } from 'src/shared/user-id.decorator';

@Controller('note')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }
 
  @Get()
  findAll(@UserId('userId') userId: string): Promise<any> {
    console.log(userId)
    return this.notesService.findAll(userId);
  }
  @Get(':id')
  findOne(@Param('id') id: string, @UserId('userId') userId): Promise<any> {
    return this.notesService.findOne(id, userId);
  }
  
  @Post()
  async create(@Body() createUserDto: any, @UserId('userId') userId: string): Promise<any> {
    try {
      createUserDto.userId =userId;
      let u = await this.notesService.create(createUserDto)
      return u;
    } catch (error) {
     return error;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: any, @UserId('userId') userId: string) {
    return this.notesService.update(createUserDto,userId, id );
  }


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

