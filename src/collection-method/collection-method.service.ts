import { Injectable } from '@nestjs/common';
import { CreateCollectionMethodDto } from './dto/create-collection-method.dto';
import { UpdateCollectionMethodDto } from './dto/update-collection-method.dto';

@Injectable()
export class CollectionMethodService {
  create(createCollectionMethodDto: CreateCollectionMethodDto) {
    return 'This action adds a new collectionMethod';
  }

  findAll() {
    return `This action returns all collectionMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collectionMethod`;
  }

  update(id: number, updateCollectionMethodDto: UpdateCollectionMethodDto) {
    return `This action updates a #${id} collectionMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} collectionMethod`;
  }
}
