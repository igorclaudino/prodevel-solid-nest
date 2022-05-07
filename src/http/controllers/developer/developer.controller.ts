import { Body, Controller, Post } from '@nestjs/common';
import { CreateDeveloperUseCase } from '../../../core/usecases/create-developer-use-case';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Controller('developer')
export class DeveloperController {
  constructor(
    private readonly createDeveloperUseCase: CreateDeveloperUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateDeveloperDto) {
    return await this.createDeveloperUseCase.handle(data);
  }
}
