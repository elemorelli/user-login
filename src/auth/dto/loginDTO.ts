import { IsEmail, Matches } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)
  password: string;
}
