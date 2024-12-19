import { Global, Module } from '@nestjs/common';
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
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './app.config';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(config), 'I am getting to the config variable';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('db.pgsql'),
      inject: [ConfigService],
    }),
    /* TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'payroll-loan-api',
      username: '',
      password: '',
      synchronize: true,
      autoLoadEntities: true,
    }), */
    ClientModule,
    UserModule,
    LoanModule,
    EmployerModule,
    TransactionModule,
    LoanRepaymentModule,
    EmployerDumpModule,
    UserAccessModule,
    CollectionModule,
    CollectionMethodModule,
    DisbursementModule,
    DisbursementMethodModule,
    ApplicationLogModule,
    RequestLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
