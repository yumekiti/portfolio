import { Module } from '@nestjs/common';
import { WritingsService } from './writings.service';
import { WritingsResolver } from './writings.resolver';

@Module({
  providers: [WritingsResolver, WritingsService],
})
export class WritingsModule {}
