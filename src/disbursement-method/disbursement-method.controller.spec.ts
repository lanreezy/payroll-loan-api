import { Test, TestingModule } from '@nestjs/testing';
import { DisbursementMethodController } from './disbursement-method.controller';
import { DisbursementMethodService } from './disbursement-method.service';

describe('DisbursementMethodController', () => {
  let controller: DisbursementMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisbursementMethodController],
      providers: [DisbursementMethodService],
    }).compile();

    controller = module.get<DisbursementMethodController>(DisbursementMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
