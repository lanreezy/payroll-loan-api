import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployerDumpService } from './employer-dump.service';
import { CreateEmployerDumpDto } from './dto/create-employer-dump.dto';
import { UpdateEmployerDumpDto } from './dto/update-employer-dump.dto';

@Controller('employer-dump')
export class EmployerDumpController {
  constructor(private readonly employerDumpService: EmployerDumpService) {}

  @Post()
  create(@Body() createEmployerDumpDto: CreateEmployerDumpDto) {
    return this.employerDumpService.create(createEmployerDumpDto);
  }

  @Get()
  findAll() {
    return this.employerDumpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employerDumpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployerDumpDto: UpdateEmployerDumpDto) {
    return this.employerDumpService.update(+id, updateEmployerDumpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employerDumpService.remove(+id);
  }
}
