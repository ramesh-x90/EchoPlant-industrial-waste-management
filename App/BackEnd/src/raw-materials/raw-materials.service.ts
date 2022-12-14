import { Injectable } from '@nestjs/common';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';

@Injectable()
export class RawMaterialsService {
  create(createRawMaterialDto: CreateRawMaterialDto) {
    return 'This action adds a new rawMaterial';
  }

  findAll() {
    return `This action returns all rawMaterials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rawMaterial`;
  }

  update(id: number, updateRawMaterialDto: UpdateRawMaterialDto) {
    return `This action updates a #${id} rawMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} rawMaterial`;
  }
}
