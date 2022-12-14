import { Injectable } from '@nestjs/common';
import { CreateAcceptedWasteDto } from './dto/create-accepted-waste.dto';
import { UpdateAcceptedWasteDto } from './dto/update-accepted-waste.dto';

@Injectable()
export class AcceptedWasteService {
  create(createAcceptedWasteDto: CreateAcceptedWasteDto) {
    return 'This action adds a new acceptedWaste';
  }

  findAll() {
    return `This action returns all acceptedWaste`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acceptedWaste`;
  }

  update(id: number, updateAcceptedWasteDto: UpdateAcceptedWasteDto) {
    return `This action updates a #${id} acceptedWaste`;
  }

  remove(id: number) {
    return `This action removes a #${id} acceptedWaste`;
  }
}
