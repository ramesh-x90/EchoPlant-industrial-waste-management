import { Injectable } from '@nestjs/common';
import { CreateTransportServiceDto } from './dto/create-transport-service.dto';
import { UpdateTransportServiceDto } from './dto/update-transport-service.dto';

@Injectable()
export class TransportServiceService {
  create(createTransportServiceDto: CreateTransportServiceDto) {
    return 'This action adds a new transportService';
  }

  findAll() {
    return `This action returns all transportService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transportService`;
  }

  update(id: number, updateTransportServiceDto: UpdateTransportServiceDto) {
    return `This action updates a #${id} transportService`;
  }

  remove(id: number) {
    return `This action removes a #${id} transportService`;
  }
}
