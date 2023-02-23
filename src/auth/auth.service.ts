
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.verifyUser(username,pass);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    if(user) return user;
    return null;
  }

  async login(user: any) {
    const payload = {id:user.id,username:user.username,email:user.email };
    console.log(user)
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }
}