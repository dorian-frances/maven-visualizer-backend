import { DependencyDto } from './dependency-dto.type';

export type PomXml = {
  project?: {
    dependencies?: {
      dependency?: DependencyDto | DependencyDto[];
    };
  };
};
