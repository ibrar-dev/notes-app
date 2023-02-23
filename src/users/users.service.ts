import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    try {
      let newUser = this.usersRepository.create(createUserDto)
      return this.usersRepository.save(newUser);
    } catch (error) {
      return error;
    }

  }


  async update(updateUserDto: UpdateUserDto): Promise<User> {
    try {
      let newUser = await this.usersRepository.update(updateUserDto.id, updateUserDto)
      let updatedUser = await this.usersRepository.findOneBy({id:updateUserDto.id})
      console.log(newUser)
      return updatedUser;
    } catch (error) {
      return error;
    }

  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }
  verifyUser(username: string, password: string): Promise<User> {
    return this.usersRepository.findOneBy({ username: username, password: password });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}