import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    try {
      const users = await this.prisma.users.findMany();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.prisma.users.findUnique({ where: { id } });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await this.prisma.users.findUnique({ where: { email } });
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
