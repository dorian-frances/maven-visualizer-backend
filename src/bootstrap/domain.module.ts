import { Module } from '@nestjs/common';
import { MavenDependencyPort } from '../domain/port/out/maven-dependency-port';
import { MavenDependencyService } from '../domain/service/maven-dependency.service';
import { GithubAdapterModule } from './github-adapter.module';
import { GithubMavenAdapter } from '../infrastructure/github-adapter/adapter/github-maven-adapter.service';

const MavenDependencyFacadeProvider = {
  provide: 'MavenDependencyFacade',
  useFactory: (mavenDependencyPort: MavenDependencyPort) =>
    new MavenDependencyService(mavenDependencyPort),
  inject: [GithubMavenAdapter],
};
@Module({
  imports: [GithubAdapterModule],
  providers: [MavenDependencyFacadeProvider],
  exports: [MavenDependencyFacadeProvider],
})
export class DomainModule {}
