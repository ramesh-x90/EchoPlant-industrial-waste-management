import { Injectable } from '@nestjs/common';
import { CreateWastePickupRequestDto } from './dto/create-waste-pickup-request.dto';
import { UpdateWastePickupRequestDto } from './dto/update-waste-pickup-request.dto';

@Injectable()
export class WastePickupRequestService {
  create(createWastePickupRequestDto: CreateWastePickupRequestDto) {
    return 'This action adds a new wastePickupRequest';
  }

  findAll() {
    return `This action returns all wastePickupRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wastePickupRequest`;
  }

  update(id: number, updateWastePickupRequestDto: UpdateWastePickupRequestDto) {
    return `This action updates a #${id} wastePickupRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} wastePickupRequest`;
  }
}
