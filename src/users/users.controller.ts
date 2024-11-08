import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { SignupDto } from './dto/signup.dto';
import { User } from './models/users.model';
import { SigninDto } from './dto/signin.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  public async sinup(@Body() sinupDto: SignupDto): Promise<User> {
    return this.usersService.signup(sinupDto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  public async signin(@Body() signinDto: SigninDto): Promise<{
    name: string;
    jwtToken: string;
    email: string;
  }> {
    return this.usersService.signin(signinDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
