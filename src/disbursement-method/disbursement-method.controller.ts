import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisbursementMethodService } from './disbursement-method.service';
import { CreateDisbursementMethodDto } from './dto/create-disbursement-method.dto';
import { UpdateDisbursementMethodDto } from './dto/update-disbursement-method.dto';

@Controller('disbursement-method')
export class DisbursementMethodController {
  constructor(private readonly disbursementMethodService: DisbursementMethodService) {}

  @Post()
  create(@Body() createDisbursementMethodDto: CreateDisbursementMethodDto) {
    return this.disbursementMethodService.create(createDisbursementMethodDto);
  }

  @Get()
  findAll() {
    return this.disbursementMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disbursementMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisbursementMethodDto: UpdateDisbursementMethodDto) {
    return this.disbursementMethodService.update(+id, updateDisbursementMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disbursementMethodService.remove(+id);
  }
}
