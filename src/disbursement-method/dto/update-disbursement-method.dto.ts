import { PartialType } from '@nestjs/mapped-types';
import { CreateDisbursementMethodDto } from './create-disbursement-method.dto';

export class UpdateDisbursementMethodDto extends PartialType(CreateDisbursementMethodDto) {}
