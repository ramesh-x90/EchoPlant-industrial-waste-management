import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportServiceService } from './transport-service.service';
import { CreateTransportServiceDto } from './dto/create-transport-service.dto';
import { UpdateTransportServiceDto } from './dto/update-transport-service.dto';

@Controller('transport-service')
export class TransportServiceController {
  constructor(private readonly transportServiceService: TransportServiceService) {}

  @Post()
  create(@Body() createTransportServiceDto: CreateTransportServiceDto) {
    return this.transportServiceService.create(createTransportServiceDto);
  }

  @Get()
  findAll() {
    return this.transportServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransportServiceDto: UpdateTransportServiceDto) {
    return this.transportServiceService.update(+id, updateTransportServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportServiceService.remove(+id);
  }
}
