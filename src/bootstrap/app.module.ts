import { Module } from '@nestjs/common';
import { GithubAdapterModule } from './github-adapter.module';
import { DomainModule } from './domain.module';
import { RestApiAdapterModule } from './rest-api-adapter.module';

@Module({
  imports: [GithubAdapterModule, DomainModule, RestApiAdapterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
