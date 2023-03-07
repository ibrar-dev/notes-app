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

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const saltOrRounds = 10;
      const password = createUserDto.password;
      const hash = await bcrypt.hash(password, saltOrRounds);
      createUserDto.password=hash;
      let newUser = this.usersRepository.create(createUserDto)
      
      return this.usersRepository.save(newUser);
    } catch (error) {
      return error;
    }

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
  async verifyUser(username: string, password: string): Promise<User> {
    
    let v=await this.usersRepository.createQueryBuilder()
    .select('*')
    .where('username = :username', { username: username })
    .orWhere('email = :email', { email: username })
    .getRawOne();
    console.log(v,password)
  
    const isMatch = await bcrypt.compare(password, v.password);

    if(isMatch){
      delete v.password;
      return v;
    }else{
      return null;
    }
    // return this.usersRepository.findOneBy({ username: username, password: password });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}