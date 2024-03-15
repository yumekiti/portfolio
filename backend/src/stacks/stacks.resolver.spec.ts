import { Test, TestingModule } from '@nestjs/testing';
import { StacksResolver } from './stacks.resolver';
import { StacksService } from './stacks.service';

describe('StacksResolver', () => {
  let resolver: StacksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StacksResolver, StacksService],
    }).compile();

    resolver = module.get<StacksResolver>(StacksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
