import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarrierOwnersService } from './carrier-owners.service';
import { CreateCarrierOwnerDto } from './dto/create-carrier-owner.dto';
import { UpdateCarrierOwnerDto } from './dto/update-carrier-owner.dto';

@Controller('carrier-owners')
export class CarrierOwnersController {
  constructor(private readonly carrierOwnersService: CarrierOwnersService) {}

  @Post()
  create(@Body() createCarrierOwnerDto: CreateCarrierOwnerDto) {
    return this.carrierOwnersService.create(createCarrierOwnerDto);
  }

  @Get()
  findAll() {
    return this.carrierOwnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrierOwnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrierOwnerDto: UpdateCarrierOwnerDto) {
    return this.carrierOwnersService.update(+id, updateCarrierOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrierOwnersService.remove(+id);
  }
}
