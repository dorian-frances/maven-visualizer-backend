import { Module } from '@nestjs/common';
import { MavenController } from '../application/rest-api-adapter/controller/maven.controller';
import { GithubAdapterModule } from './github-adapter.module';

@Module({
  imports: [GithubAdapterModule],
  controllers: [MavenController],
})
export class RestApiAdapterModule {}
