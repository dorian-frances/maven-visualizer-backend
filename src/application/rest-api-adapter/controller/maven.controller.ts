import { Controller, Get, Inject, Query } from '@nestjs/common';
import { MavenDependencyFacade } from '../../../domain/port/in/maven-dependency.facade';
import { VcsType } from '../../../domain/model/vcs.type';
import { MavenDependencyResponseDTO } from '../dto/maven-dependency-response.dto';

@Controller('maven')
export class MavenController {
  constructor(
    @Inject('MavenDependencyFacade')
    private readonly mavenDependencyFacade: MavenDependencyFacade,
  ) {}

  @Get('dependencies')
  async getPomDependencies(
    @Query('vcs') vcs: VcsType,
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('branch') branch: string,
  ): Promise<MavenDependencyResponseDTO> {
    return MavenDependencyResponseDTO.fromDomain(
      await this.mavenDependencyFacade.getMavenDependency(
        vcs,
        owner,
        repo,
        branch,
      ),
    );
  }
}
