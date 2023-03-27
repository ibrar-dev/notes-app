import { Controller, Request, Get, Post, Body,Response, Patch, Param, Delete, Res } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import {
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path'
import { UseGuards, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiExcludeEndpoint, ApiExtraModels, ApiResponse, getSchemaPath, ApiTags } from '@nestjs/swagger';
import { Authorization } from '../auth/dto/user-login.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { Auth, Authorization } from '../auth/dto/user-login.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Resume')
@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) { }

  @Post()
  @ApiExtraModels(CreateResumeDto)
  // @ApiResponse({
  //   schema: {
  //     '$ref': getSchemaPath(CreateResumeDto)
  //   }
  // })

  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }
  // @Get('/from-json')
  // addFromJson() {
  //   return this.resumeService.reStructureData();
  // }
  // @ApiOperation({ summary: 'add access token in authorize (see top right corner on this page) then you can use this endpoint' })
  // @ApiExtraModels(Authorization)
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.resumeService.findAll();
  }

  @Get("/count")
  findCount() {
    return this.resumeService.count();
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.resumeService.findOne(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.update(+id, updateResumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeService.remove(+id);
  }

  @Delete()
  async deleteByCategory(@Res() res: Response) {

    try {

      let resp = await this.resumeService.deleteByCategory();
      return resp;
    } catch (error) {
      return error;
      // res.status(HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
    }

  }


  @ApiOperation({ summary: 'add access token in authorize (see top right corner on this page) then you can use this endpoint' })
  @ApiExtraModels(Authorization)
  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads'
      , filename: (req, file, cb) => {
        const randomName = Date.now()
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))

  uploadFile(
    @Body() body: any,
    @Request() req,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    return this.resumeService.uploadResume({ id: body.id, file: file.filename, userId: req.user.id });

  }
}
