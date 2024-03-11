import { Module } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { TimelineResolver } from './timeline.resolver';

@Module({
  providers: [TimelineResolver, TimelineService],
})
export class TimelineModule {}
