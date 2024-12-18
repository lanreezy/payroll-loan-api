import { Injectable } from '@nestjs/common';
import { CreateLoanRepaymentDto } from './dto/create-loan-repayment.dto';
import { UpdateLoanRepaymentDto } from './dto/update-loan-repayment.dto';

@Injectable()
export class LoanRepaymentService {
  create(createLoanRepaymentDto: CreateLoanRepaymentDto) {
    return 'This action adds a new loanRepayment';
  }

  findAll() {
    return `This action returns all loanRepayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanRepayment`;
  }

  update(id: number, updateLoanRepaymentDto: UpdateLoanRepaymentDto) {
    return `This action updates a #${id} loanRepayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} loanRepayment`;
  }
}
