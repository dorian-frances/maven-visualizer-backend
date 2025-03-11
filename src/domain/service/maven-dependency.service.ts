import { Injectable } from '@nestjs/common';
import { MavenDependencyFacade } from '../port/in/maven-dependency.facade';
import { VcsType } from '../model/vcs.type';
import { MavenDependency } from '../model/maven-dependency.type';
import { MavenDependencyPort } from '../port/out/maven-dependency-port';

@Injectable()
export class MavenDependencyService implements MavenDependencyFacade {
  constructor(private readonly mavenDependencyPort: MavenDependencyPort) {}

  async getMavenDependency(
    vcs: VcsType,
    owner: string,
    repo: string,
    branch: string,
  ): Promise<MavenDependency[]> {
    switch (vcs) {
      case 'GITHUB':
        return this.mavenDependencyPort.retrieveDependenciesFromGithub(
          owner,
          repo,
          branch,
        );
      default:
        throw new Error('VCS not supported');
    }
  }
}
