import { Injectable } from '@nestjs/common';
import { CreateCarrierOwnerDto } from './dto/create-carrier-owner.dto';
import { UpdateCarrierOwnerDto } from './dto/update-carrier-owner.dto';

@Injectable()
export class CarrierOwnersService {
  create(createCarrierOwnerDto: CreateCarrierOwnerDto) {
    return 'This action adds a new carrierOwner';
  }

  findAll() {
    return `This action returns all carrierOwners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrierOwner`;
  }

  update(id: number, updateCarrierOwnerDto: UpdateCarrierOwnerDto) {
    return `This action updates a #${id} carrierOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrierOwner`;
  }
}
