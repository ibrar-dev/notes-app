
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {

    const user = await this.usersService.verifyUser(username,pass);
    if(user) return user;
    return null;
  }

  async login(user: any) {
    const payload = {id:user.id,username:user.username,email:user.email };
    console.log("login",payload)
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }
}