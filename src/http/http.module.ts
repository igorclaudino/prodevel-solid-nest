import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { DeveloperControllerController } from './controllers/developer/developer-controller.controller';

@Module({
  controllers: [DeveloperControllerController],
  imports: [CoreModule],
})
export class HttpModule {}
