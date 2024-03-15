import { Test, TestingModule } from '@nestjs/testing';
import { WritingsService } from './writings.service';

describe('WritingsService', () => {
  let service: WritingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WritingsService],
    }).compile();

    service = module.get<WritingsService>(WritingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
