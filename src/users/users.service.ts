import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    // TODO: Handle unique email error
    return await this.prisma.user.create({
      data,
    });
  }
}
