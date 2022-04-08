import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HttpModule } from './http/http.module';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    InfraModule,
    AppModule,
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
