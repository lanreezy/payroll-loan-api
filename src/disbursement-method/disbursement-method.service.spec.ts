import { Test, TestingModule } from '@nestjs/testing';
import { DisbursementMethodService } from './disbursement-method.service';

describe('DisbursementMethodService', () => {
  let service: DisbursementMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisbursementMethodService],
    }).compile();

    service = module.get<DisbursementMethodService>(DisbursementMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
