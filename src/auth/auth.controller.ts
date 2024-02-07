import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-userDTO';
import { LoginDTO } from './dto/loginDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body(new ValidationPipe()) user: LoginDTO) {
    const token = this.authService.logInUser(user);
    return token;
  }

  @Post('signin')
  signInUser(@Body(new ValidationPipe()) user: CreateUserDTO) {
    const token = this.authService.createUser(user);
    return token;
  }
}
