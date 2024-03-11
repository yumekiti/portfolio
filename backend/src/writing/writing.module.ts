import { Module } from '@nestjs/common';
import { WritingService } from './writing.service';
import { WritingResolver } from './writing.resolver';

@Module({
  providers: [WritingResolver, WritingService],
})
export class WritingModule {}
