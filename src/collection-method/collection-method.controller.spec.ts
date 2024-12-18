import { Test, TestingModule } from '@nestjs/testing';
import { CollectionMethodController } from './collection-method.controller';
import { CollectionMethodService } from './collection-method.service';

describe('CollectionMethodController', () => {
  let controller: CollectionMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionMethodController],
      providers: [CollectionMethodService],
    }).compile();

    controller = module.get<CollectionMethodController>(CollectionMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
