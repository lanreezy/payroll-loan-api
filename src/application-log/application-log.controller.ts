import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationLogService } from './application-log.service';
import { CreateApplicationLogDto } from './dto/create-application-log.dto';
import { UpdateApplicationLogDto } from './dto/update-application-log.dto';

@Controller('application-log')
export class ApplicationLogController {
  constructor(private readonly applicationLogService: ApplicationLogService) {}

  @Post()
  create(@Body() createApplicationLogDto: CreateApplicationLogDto) {
    return this.applicationLogService.create(createApplicationLogDto);
  }

  @Get()
  findAll() {
    return this.applicationLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationLogDto: UpdateApplicationLogDto) {
    return this.applicationLogService.update(+id, updateApplicationLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationLogService.remove(+id);
  }
}
