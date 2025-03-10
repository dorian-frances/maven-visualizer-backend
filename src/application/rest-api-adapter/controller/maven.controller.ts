import { Controller, Get, Query } from '@nestjs/common';
import { GithubMavenAdapter } from '../../../infrastructure/github-adapter/adapter/github-maven-adapter.service';

@Controller('maven')
export class MavenController {
  constructor(private readonly mavenService: GithubMavenAdapter) {}

  @Get('dependencies')
  async getPomDependencies(
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('branch') branch?: string,
  ) {
    return await this.mavenService.fetchPomXml(owner, repo, branch);
  }
}
