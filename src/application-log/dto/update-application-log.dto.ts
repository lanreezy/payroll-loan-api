import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationLogDto } from './create-application-log.dto';

export class UpdateApplicationLogDto extends PartialType(CreateApplicationLogDto) {}
