import { Module } from '@nestjs/common';
import { DisbursementMethodService } from './disbursement-method.service';
import { DisbursementMethodController } from './disbursement-method.controller';

@Module({
  controllers: [DisbursementMethodController],
  providers: [DisbursementMethodService],
})
export class DisbursementMethodModule {}
