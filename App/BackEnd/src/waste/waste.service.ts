import { Injectable } from '@nestjs/common';
import { CreateWasteDto } from './dto/create-waste.dto';
import { UpdateWasteDto } from './dto/update-waste.dto';

@Injectable()
export class WasteService {
  create(createWasteDto: CreateWasteDto) {
    return 'This action adds a new waste';
  }

  findAll() {
    return `This action returns all waste`;
  }

  findOne(id: number) {
    return `This action returns a #${id} waste`;
  }

  update(id: number, updateWasteDto: UpdateWasteDto) {
    return `This action updates a #${id} waste`;
  }

  remove(id: number) {
    return `This action removes a #${id} waste`;
  }
}
