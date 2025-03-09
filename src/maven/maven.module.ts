import { Module } from '@nestjs/common';
import { MavenController } from './maven.controller';
import { MavenService } from './maven.service';

@Module({
  controllers: [MavenController],
  providers: [MavenService],
})
export class MavenModule {}
