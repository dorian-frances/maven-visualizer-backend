import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { XMLParser } from 'fast-xml-parser';

@Injectable()
export class MavenService {
  private readonly octokit = new Octokit();

  async fetchPomXml(
    owner: string,
    repo: string,
    branch: string = 'main',
  ): Promise<any> {
    try {
      const { data } = await this.octokit.repos.getContent({
        owner,
        repo,
        path: 'pom.xml',
        ref: branch,
      });
      const pomXml = Buffer.from((data as any).content, 'base64').toString();

      const parser = new XMLParser({ ignoreAttributes: false });
      const jsonObj = parser.parse(pomXml);
      return jsonObj?.project?.dependencies?.dependency || [];
    } catch (error) {
      console.error('Erreur lors de la récupération du pom.xml:', error);
      throw new Error('Impossible de récupérer le pom.xml');
    }
  }
}
