import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollectionMethodService } from './collection-method.service';
import { CreateCollectionMethodDto } from './dto/create-collection-method.dto';
import { UpdateCollectionMethodDto } from './dto/update-collection-method.dto';

@Controller('collection-method')
export class CollectionMethodController {
  constructor(private readonly collectionMethodService: CollectionMethodService) {}

  @Post()
  create(@Body() createCollectionMethodDto: CreateCollectionMethodDto) {
    return this.collectionMethodService.create(createCollectionMethodDto);
  }

  @Get()
  findAll() {
    return this.collectionMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionMethodDto: UpdateCollectionMethodDto) {
    return this.collectionMethodService.update(+id, updateCollectionMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionMethodService.remove(+id);
  }
}
