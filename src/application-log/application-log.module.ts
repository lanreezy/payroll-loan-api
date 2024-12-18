import { Module } from '@nestjs/common';
import { ApplicationLogService } from './application-log.service';
import { ApplicationLogController } from './application-log.controller';

@Module({
  controllers: [ApplicationLogController],
  providers: [ApplicationLogService],
})
export class ApplicationLogModule {}
