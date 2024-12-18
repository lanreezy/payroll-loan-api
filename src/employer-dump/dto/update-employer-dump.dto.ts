import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployerDumpDto } from './create-employer-dump.dto';

export class UpdateEmployerDumpDto extends PartialType(CreateEmployerDumpDto) {}
