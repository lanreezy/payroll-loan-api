import { Test, TestingModule } from '@nestjs/testing';
import { EmployerDumpController } from './employer-dump.controller';
import { EmployerDumpService } from './employer-dump.service';

describe('EmployerDumpController', () => {
  let controller: EmployerDumpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployerDumpController],
      providers: [EmployerDumpService],
    }).compile();

    controller = module.get<EmployerDumpController>(EmployerDumpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
