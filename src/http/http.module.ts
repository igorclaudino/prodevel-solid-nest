import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { DeveloperController } from './controllers/developer/developer.controller';

@Module({
  controllers: [DeveloperController],
  imports: [CoreModule],
})
export class HttpModule {}
