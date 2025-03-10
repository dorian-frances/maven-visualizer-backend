import { Module } from '@nestjs/common';
import { RestApiAdapterModule } from './rest-api-adapter.module';

@Module({
  imports: [RestApiAdapterModule],
})
export class AppModule {}
