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
  const dependencies: DependencyDto[] = [];

  function traverse(node: DependencyDto | DependencyDto[]) {
    if (!node || typeof node !== 'object') return; // <-- Vérification ajoutée

    if (Array.isArray(node)) {
      node.forEach(traverse);
    } else {
      if ('groupId' in node && 'artifactId' in node) {
        dependencies.push(node);
      }
      Object.values(node).forEach((value) => {
        if (typeof value === 'object' || Array.isArray(value)) {
          traverse(value);
        }
      });
    }
  }
  if (pomXml.project?.dependencies?.dependency) {
    traverse(pomXml.project.dependencies.dependency);
  }
  return dependencies;
}
