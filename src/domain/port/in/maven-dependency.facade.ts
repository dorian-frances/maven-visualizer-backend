import { VcsType } from '../../model/vcs.type';
import { MavenDependency } from '../../model/dependency.type';

export interface MavenDependencyFacade {
  getMavenDependency(
    vcs: VcsType,
    owner: string,
    repo: string,
    branch: string,
  ): MavenDependency[];
}
