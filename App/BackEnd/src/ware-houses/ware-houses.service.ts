import { Injectable } from '@nestjs/common';
import { CreateWareHouseDto } from './dto/create-ware-house.dto';
import { UpdateWareHouseDto } from './dto/update-ware-house.dto';

@Injectable()
export class WareHousesService {
  create(createWareHouseDto: CreateWareHouseDto) {
    return 'This action adds a new wareHouse';
  }

  findAll() {
    return `This action returns all wareHouses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wareHouse`;
  }

  update(id: number, updateWareHouseDto: UpdateWareHouseDto) {
    return `This action updates a #${id} wareHouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} wareHouse`;
  }
}
