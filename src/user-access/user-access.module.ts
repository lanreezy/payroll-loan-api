import { Module } from '@nestjs/common';
import { UserAccessService } from './user-access.service';
import { UserAccessController } from './user-access.controller';

@Module({
  controllers: [UserAccessController],
  providers: [UserAccessService],
})
export class UserAccessModule {}
