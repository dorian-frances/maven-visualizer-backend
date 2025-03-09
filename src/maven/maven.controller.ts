import { Controller, Get, Query } from '@nestjs/common';
import { MavenService } from './maven.service';

@Controller('maven')
export class MavenController {
  constructor(private readonly mavenService: MavenService) {}

  @Get('dependencies')
  async getPomDependencies(
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('branch') branch?: string,
  ) {
    return await this.mavenService.fetchPomXml(owner, repo, branch);
  }
}
