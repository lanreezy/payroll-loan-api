import { Injectable } from '@nestjs/common';
import { CreateUserAccessDto } from './dto/create-user-access.dto';
import { UpdateUserAccessDto } from './dto/update-user-access.dto';

@Injectable()
export class UserAccessService {
  create(createUserAccessDto: CreateUserAccessDto) {
    return 'This action adds a new userAccess';
  }

  findAll() {
    return `This action returns all userAccess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccess`;
  }

  /* update(id: number, updateUserAccessDto: UpdateUserAccessDto) {
    return `This action updates a #${id} userAccess`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccess`;
  } */
}
