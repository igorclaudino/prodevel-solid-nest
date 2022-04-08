import { Inject, Injectable } from '@nestjs/common';
import { Developer } from '../entities/developer.entity';
import {
  DEVELOPER_REPOSITORY_TOKEN,
  IDeveloperRepository,
} from '../repositories/developer.repository.interface';

interface CreateDeveloperParams {
  name: string;
  email: string;
  password: string;
  githubProfile: string;
}

@Injectable()
export class CreateDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_REPOSITORY_TOKEN)
    private readonly developerRepository: IDeveloperRepository,
  ) {}

  async handle({
    email,
    githubProfile,
    name,
    password,
  }: CreateDeveloperParams) {
    const developer = Developer.create({
      email,
      githubProfile,
      name,
      password,
    });

    const createdDeveloper = await this.developerRepository.create(developer);

    return createdDeveloper;
  }
}
