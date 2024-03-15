import { Test, TestingModule } from '@nestjs/testing';
import { WritingsResolver } from './writings.resolver';
import { WritingsService } from './writings.service';

describe('WritingsResolver', () => {
  let resolver: WritingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WritingsResolver, WritingsService],
    }).compile();

    resolver = module.get<WritingsResolver>(WritingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
