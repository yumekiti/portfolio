import { Test, TestingModule } from '@nestjs/testing';
import { WritingResolver } from './writing.resolver';
import { WritingService } from './writing.service';

describe('WritingResolver', () => {
  let resolver: WritingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WritingResolver, WritingService],
    }).compile();

    resolver = module.get<WritingResolver>(WritingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
