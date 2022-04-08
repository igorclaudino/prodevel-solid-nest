import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { CreateDeveloperUseCase } from './usecases/create-developer-use-case';

@Module({
  imports: [InfraModule],
  providers: [CreateDeveloperUseCase],
  exports: [CreateDeveloperUseCase],
})
export class CoreModule {}
