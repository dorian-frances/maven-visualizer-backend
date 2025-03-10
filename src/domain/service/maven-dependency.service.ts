import { Injectable } from '@nestjs/common';
import { MavenDependencyFacade } from '../port/in/maven-dependency.facade';
import { VcsType } from '../model/vcs.type';
import { MavenDependency } from '../model/dependency.type';
import { MavenDependencyPort } from '../port/out/maven-dependency-port';

@Injectable()
export class MavenDependencyService implements MavenDependencyFacade {
  constructor(private readonly mavenDependencyPort: MavenDependencyPort) {}

  getMavenDependency(
    vcs: VcsType,
    owner: string,
    repo: string,
    branch: string,
  ): MavenDependency[] {
    return [];
  }
}
