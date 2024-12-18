import { Test, TestingModule } from '@nestjs/testing';
import { CollectionMethodService } from './collection-method.service';

describe('CollectionMethodService', () => {
  let service: CollectionMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionMethodService],
    }).compile();

    service = module.get<CollectionMethodService>(CollectionMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
