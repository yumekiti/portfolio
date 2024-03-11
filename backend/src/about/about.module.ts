import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutResolver } from './about.resolver';
import { About } from './entities/about.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  providers: [AboutResolver, AboutService],
})
export class AboutModule {}
