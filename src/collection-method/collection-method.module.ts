import { Module } from '@nestjs/common';
import { CollectionMethodService } from './collection-method.service';
import { CollectionMethodController } from './collection-method.controller';

@Module({
  controllers: [CollectionMethodController],
  providers: [CollectionMethodService],
})
export class CollectionMethodModule {}
