import { Test, TestingModule } from '@nestjs/testing';
import { TimelineResolver } from './timeline.resolver';
import { TimelineService } from './timeline.service';

describe('TimelineResolver', () => {
  let resolver: TimelineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimelineResolver, TimelineService],
    }).compile();

    resolver = module.get<TimelineResolver>(TimelineResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
