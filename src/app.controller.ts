import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/secured-hello')
  @UseGuards(AuthGuard)
  getSecuredHello(): string {
    return this.appService.getSecuredHello();
  }
}
