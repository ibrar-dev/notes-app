import { IsNotEmpty, IsOptional } from 'class-validator';

export class NoteCreateDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  userId: string;
}

export class NoteUpdateDto {
    @IsOptional()
    title: string;
  
    @IsOptional()
    description: string;
  
    @IsOptional()
    status: string;
  }