import { Module } from '@nestjs/common';
import { EmployerDumpService } from './employer-dump.service';
import { EmployerDumpController } from './employer-dump.controller';

@Module({
  controllers: [EmployerDumpController],
  providers: [EmployerDumpService],
})
export class EmployerDumpModule {}
