import { Module } from '@nestjs/common';
import { MavenController } from '../application/rest-api-adapter/controller/maven.controller';
import { DomainModule } from './domain.module';

@Module({
  imports: [DomainModule],
  controllers: [MavenController],
})
export class RestApiAdapterModule {}
