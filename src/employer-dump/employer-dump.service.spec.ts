import { Test, TestingModule } from '@nestjs/testing';
import { EmployerDumpService } from './employer-dump.service';

describe('EmployerDumpService', () => {
  let service: EmployerDumpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployerDumpService],
    }).compile();

    service = module.get<EmployerDumpService>(EmployerDumpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
