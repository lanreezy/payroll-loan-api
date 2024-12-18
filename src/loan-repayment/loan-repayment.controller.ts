import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanRepaymentService } from './loan-repayment.service';
import { CreateLoanRepaymentDto } from './dto/create-loan-repayment.dto';
import { UpdateLoanRepaymentDto } from './dto/update-loan-repayment.dto';

@Controller('loan-repayment')
export class LoanRepaymentController {
  constructor(private readonly loanRepaymentService: LoanRepaymentService) {}

  @Post()
  create(@Body() createLoanRepaymentDto: CreateLoanRepaymentDto) {
    return this.loanRepaymentService.create(createLoanRepaymentDto);
  }

  @Get()
  findAll() {
    return this.loanRepaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanRepaymentService.findOne(+id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanRepaymentDto: UpdateLoanRepaymentDto) {
    return this.loanRepaymentService.update(+id, updateLoanRepaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanRepaymentService.remove(+id);
  } */
}
