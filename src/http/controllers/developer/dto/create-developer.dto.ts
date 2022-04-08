import { IsEmail, IsString, Length, Min } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 16)
  password: string;

  @IsString()
  githubProfile: string;
}
