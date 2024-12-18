import { Injectable } from '@nestjs/common';
import { CreateEmployerDumpDto } from './dto/create-employer-dump.dto';
import { UpdateEmployerDumpDto } from './dto/update-employer-dump.dto';

@Injectable()
export class EmployerDumpService {
  create(createEmployerDumpDto: CreateEmployerDumpDto) {
    return 'This action adds a new employerDump';
  }

  findAll() {
    return `This action returns all employerDump`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employerDump`;
  }

  update(id: number, updateEmployerDumpDto: UpdateEmployerDumpDto) {
    return `This action updates a #${id} employerDump`;
  }

  remove(id: number) {
    return `This action removes a #${id} employerDump`;
  }
}
