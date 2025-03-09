import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MavenModule } from './maven/maven.module';

@Module({
  imports: [MavenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
