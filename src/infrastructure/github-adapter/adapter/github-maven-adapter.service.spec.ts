import { Test, TestingModule } from '@nestjs/testing';
import { GithubMavenAdapter } from './github-maven-adapter.service';

describe('GithubMavenAdapter', () => {
  let service: GithubMavenAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubMavenAdapter],
    }).compile();

    service = module.get<GithubMavenAdapter>(GithubMavenAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
