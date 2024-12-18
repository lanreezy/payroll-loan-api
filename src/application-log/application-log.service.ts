import { Injectable } from '@nestjs/common';
import { CreateApplicationLogDto } from './dto/create-application-log.dto';
import { UpdateApplicationLogDto } from './dto/update-application-log.dto';

@Injectable()
export class ApplicationLogService {
  create(createApplicationLogDto: CreateApplicationLogDto) {
    return 'This action adds a new applicationLog';
  }

  findAll() {
    return `This action returns all applicationLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicationLog`;
  }

  /* update(id: number, updateApplicationLogDto: UpdateApplicationLogDto) {
    return `Not able to update an application log`;
  }

  remove(id: number) {
    return `Not able to remove an application log`;
  } */
}
