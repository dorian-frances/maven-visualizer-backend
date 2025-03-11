import { MavenDependency } from '../../model/maven-dependency.type';

export interface MavenDependencyPort {
  retrieveDependenciesFromGithub(
    owner: string,
    repo: string,
    branch: string,
  ): Promise<MavenDependency[]>;
}
