import { Injectable } from '@nestjs/common';
import { CreateDisbursementMethodDto } from './dto/create-disbursement-method.dto';
import { UpdateDisbursementMethodDto } from './dto/update-disbursement-method.dto';

@Injectable()
export class DisbursementMethodService {
  create(createDisbursementMethodDto: CreateDisbursementMethodDto) {
    return 'This action adds a new disbursementMethod';
  }

  findAll() {
    return `This action returns all disbursementMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disbursementMethod`;
  }

  update(id: number, updateDisbursementMethodDto: UpdateDisbursementMethodDto) {
    return `This action updates a #${id} disbursementMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} disbursementMethod`;
  }
}
