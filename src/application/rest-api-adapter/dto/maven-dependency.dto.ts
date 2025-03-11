import { MavenDependency } from '../../../domain/model/maven-dependency.type';

export class MavenDependencyDTO {
  groupId: string;
  artifactId: string;
  version: string;

  static fromDomain(mavenDependency: MavenDependency): MavenDependencyDTO {
    const mavenDependencyDto = new MavenDependencyDTO();
    mavenDependencyDto.groupId = mavenDependency.groupId;
    mavenDependencyDto.artifactId = mavenDependency.artifactId;
    mavenDependencyDto.version = mavenDependency.version ?? '';
    return mavenDependencyDto;
  }
}
