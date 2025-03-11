import { VcsType } from '../../model/vcs.type';
import { MavenDependency } from '../../model/maven-dependency.type';

export interface MavenDependencyFacade {
  getMavenDependency(
    vcs: VcsType,
    owner: string,
    repo: string,
    branch: string,
  ): Promise<MavenDependency[]>;
}
