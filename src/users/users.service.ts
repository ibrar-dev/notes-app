import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: any) {
    try {
      console.log(createUserDto)
     return await this.usersRepository.save(createUserDto)
    } catch (error) {
      console.log(error)
      return error;
    }

  }

  async findUserWithEmail(email: string) {
    console.log(email)
    return this.usersRepository.findOne( {where: {
      email
    }});
  }

  
  async update(updateUserDto: UpdateUserDto): Promise<User> {
    try {
      let newUser = await this.usersRepository.update(updateUserDto.id, updateUserDto)
      let updatedUser = await this.usersRepository.findOneBy({ id: updateUserDto.id })
      console.log(newUser)
      return updatedUser;
    } catch (error) {
      return error;
    }

  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }
  async verifyUser(email: string, password: string): Promise<User> {
    try {
      let v=await this.usersRepository.createQueryBuilder()
      .select('*')
      .where('email = :email', { email: email })
      .getRawOne();
      console.log(v,password)
    
      const isMatch = await bcrypt.compare(password, v.password);
  
      if(isMatch){
        delete v.password;
        return v;
      }else{
        return null;
      }
    } catch (error) {
      return null;
    }
  
    // return this.usersRepository.findOneBy({ username: username, password: password });
  }


  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  
}