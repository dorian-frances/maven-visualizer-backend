import { Module } from '@nestjs/common';
import { GithubMavenAdapter } from '../infrastructure/github-adapter/adapter/github-maven-adapter.service';

@Module({
  providers: [GithubMavenAdapter],
  exports: [GithubMavenAdapter],
})
export class GithubAdapterModule {}
