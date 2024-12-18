import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { RequestLogModule } from './request-log/request-log.module';
import { ApplicationLogModule } from './application-log/application-log.module';
import { DisbursementMethodModule } from './disbursement-method/disbursement-method.module';
import { DisbursementModule } from './disbursement/disbursement.module';
import { CollectionMethodModule } from './collection-method/collection-method.module';
import { CollectionModule } from './collection/collection.module';
import { UserAccessModule } from './user-access/user-access.module';
import { EmployerDumpModule } from './employer-dump/employer-dump.module';
import { LoanRepaymentModule } from './loan-repayment/loan-repayment.module';
import { LoanModule } from './repayment/loan/loan.module';
import { TransactionModule } from './transaction/transaction.module';
import { EmployerModule } from './employer/employer.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ClientModule, UserModule, LoanModule, EmployerModule, TransactionModule, LoanRepaymentModule, EmployerDumpModule, UserAccessModule, CollectionModule, CollectionMethodModule, DisbursementModule, DisbursementMethodModule, ApplicationLogModule, RequestLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
