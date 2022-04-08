import { Module } from '@nestjs/common';
import { DEVELOPER_REPOSITORY_TOKEN } from '../core/repositories/developer.repository.interface';
import { DeveloperRepository } from './repositories/developer.repository';

@Module({
  providers: [
    {
      provide: DEVELOPER_REPOSITORY_TOKEN,
      useClass: DeveloperRepository,
    },
  ],
  exports: [
    {
      provide: DEVELOPER_REPOSITORY_TOKEN,
      useClass: DeveloperRepository,
    },
  ],
})
export class InfraModule {}
