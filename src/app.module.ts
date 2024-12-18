import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { TransactionModule } from './transaction/transaction.module';
import { EmployerModule } from './employer/employer.module';
import { LoanModule } from './loan/loan.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule, UserModule, LoanModule, EmployerModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
