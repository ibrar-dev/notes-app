import { Controller, Get, Request, Post, UseGuards, Body, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiExcludeEndpoint, ApiExtraModels, ApiResponse, getSchemaPath, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Auth, Authorization } from './dto/user-login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @ApiExtraModels(Auth)
  @ApiResponse({
    schema: {
      '$ref': getSchemaPath(Auth)
    }
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() loginBody: Auth) {
    console.log(req.user)
    return this.authService.login(req.user);
  }
  
}