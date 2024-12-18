import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisbursementService } from './disbursement.service';
import { CreateDisbursementDto } from './dto/create-disbursement.dto';
import { UpdateDisbursementDto } from './dto/update-disbursement.dto';

@Controller('disbursement')
export class DisbursementController {
  constructor(private readonly disbursementService: DisbursementService) {}

  @Post()
  create(@Body() createDisbursementDto: CreateDisbursementDto) {
    return this.disbursementService.create(createDisbursementDto);
  }

  @Get()
  findAll() {
    return this.disbursementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disbursementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisbursementDto: UpdateDisbursementDto) {
    return this.disbursementService.update(+id, updateDisbursementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disbursementService.remove(+id);
  }
}
