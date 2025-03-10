import { Controller, Get, Inject, Query } from '@nestjs/common';
import { MavenDependencyFacade } from '../../../domain/port/in/maven-dependency.facade';
import { MavenDependency } from '../../../domain/model/dependency.type';
import { VcsType } from '../../../domain/model/vcs.type';

@Controller('maven')
export class MavenController {
  constructor(
    @Inject('MavenDependencyFacade')
    private readonly mavenDependencyFacade: MavenDependencyFacade,
  ) {}

  @Get('dependencies')
  getPomDependencies(
    @Query('vcs') vcs: VcsType,
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('branch') branch: string,
  ): Promise<MavenDependency[]> {
    return Promise.resolve(
      this.mavenDependencyFacade.getMavenDependency(vcs, owner, repo, branch),
    );
  }
}
