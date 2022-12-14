import { Injectable } from '@nestjs/common';
import { CreateRecyclerDto } from './dto/create-recycler.dto';
import { UpdateRecyclerDto } from './dto/update-recycler.dto';

@Injectable()
export class RecyclersService {
  create(createRecyclerDto: CreateRecyclerDto) {
    return 'This action adds a new recycler';
  }

  findAll() {
    return `This action returns all recyclers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recycler`;
  }

  update(id: number, updateRecyclerDto: UpdateRecyclerDto) {
    return `This action updates a #${id} recycler`;
  }

  remove(id: number) {
    return `This action removes a #${id} recycler`;
  }
}
