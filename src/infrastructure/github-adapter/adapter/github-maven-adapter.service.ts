import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { XMLParser } from 'fast-xml-parser';
import { PomXml } from '../dto/pom-xml.type';
import { DependencyDto } from '../dto/dependency-dto.type';

@Injectable()
export class GithubMavenAdapter {
  private readonly octokit = new Octokit();

  async retrieveAllDependenciesFromPom(
    owner: string,
    repo: string,
    branch: string = 'main',
  ): Promise<DependencyDto[]> {
    try {
      const { data } = await this.octokit.repos.getContent({
        owner,
        repo,
        path: 'pom.xml',
        ref: branch,
      });
      if (!('content' in data) || typeof data.content !== 'string') {
        throw new Error('Le fichier pom.xml est introuvable ou invalide.');
      }

      const pomXml = Buffer.from(data.content, 'base64').toString();

      const parser = new XMLParser({ ignoreAttributes: false });
      const jsonObj: PomXml = parser.parse(pomXml) as PomXml;

      return extractDependencies(jsonObj);
    } catch (error) {
      console.error('Erreur lors de la récupération du pom.xml:', error);
      throw new Error('Impossible de récupérer le pom.xml');
    }
  }
}

function extractDependencies(pomXml: PomXml): DependencyDto[] {
  if (!pomXml?.project?.dependencies?.dependency) {
    return [];
  }

  if (Array.isArray(pomXml.project.dependencies.dependency)) {
    return pomXml.project.dependencies.dependency;
  }

  return [pomXml.project.dependencies.dependency];
}
