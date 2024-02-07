import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async generateToken(userId: number, email: string) {
    return await this.jwtService.signAsync({
      sub: userId,
      username: email,
    });
  }

  async logInUser({ email, password }) {
    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!(await bcrypt.compare(password, user.password_hash))) {
      throw new UnauthorizedException();
    }

    return this.generateToken(user.id, user.email);
  }

  async createUser({ name, email, password }) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const user = await this.usersService.createUser({
      name,
      email,
      password_hash: hash,
    });

    if (!user) {
      throw new Error();
    }

    return this.generateToken(user.id, user.email);
  }
}
