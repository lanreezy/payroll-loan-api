import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationLogService } from './application-log.service';

describe('ApplicationLogService', () => {
  let service: ApplicationLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationLogService],
    }).compile();

    service = module.get<ApplicationLogService>(ApplicationLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
