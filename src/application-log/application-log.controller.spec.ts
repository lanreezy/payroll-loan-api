import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationLogController } from './application-log.controller';
import { ApplicationLogService } from './application-log.service';

describe('ApplicationLogController', () => {
  let controller: ApplicationLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationLogController],
      providers: [ApplicationLogService],
    }).compile();

    controller = module.get<ApplicationLogController>(ApplicationLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
