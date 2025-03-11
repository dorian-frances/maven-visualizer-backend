import { MavenDependencyDTO } from './maven-dependency.dto';
import { MavenDependency } from '../../../domain/model/maven-dependency.type';

export class MavenDependencyResponseDTO {
  dependencies: MavenDependencyDTO[];

  static fromDomain(
    dependencies: MavenDependency[],
  ): MavenDependencyResponseDTO {
    const mavenDependencyResponseDto = new MavenDependencyResponseDTO();
    mavenDependencyResponseDto.dependencies = dependencies.map((dependency) =>
      MavenDependencyDTO.fromDomain(dependency),
    );
    return mavenDependencyResponseDto;
  }
}
