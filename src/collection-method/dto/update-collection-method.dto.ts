import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionMethodDto } from './create-collection-method.dto';

export class UpdateCollectionMethodDto extends PartialType(CreateCollectionMethodDto) {}
