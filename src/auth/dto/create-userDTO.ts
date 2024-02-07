import { IsEmail, Matches, MinLength } from 'class-validator';

export class CreateUserDTO {
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)
  password: string;
}
