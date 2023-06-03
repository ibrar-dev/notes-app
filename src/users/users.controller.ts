import {
  Controller, Get, UseGuards, Body, Patch
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UserId } from 'src/shared/user-id.decorator';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  find(@UserId('userId') userId: string): Promise<any> {
    return this.usersService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  update(@Body() body: UpdateUserDto, @UserId('userId') userId: string) {
    const {firstName, lastName} = body;
    return this.usersService.update({firstName, lastName},userId );
  }
}