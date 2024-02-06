import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Public World!';
  }

  getSecuredHello(): string {
    return 'Hello VIP World!';
  }
}
