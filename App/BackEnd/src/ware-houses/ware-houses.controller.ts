import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WareHousesService } from './ware-houses.service';
import { CreateWareHouseDto } from './dto/create-ware-house.dto';
import { UpdateWareHouseDto } from './dto/update-ware-house.dto';

@Controller('ware-houses')
export class WareHousesController {
  constructor(private readonly wareHousesService: WareHousesService) {}

  @Post()
  create(@Body() createWareHouseDto: CreateWareHouseDto) {
    return this.wareHousesService.create(createWareHouseDto);
  }

  @Get()
  findAll() {
    return this.wareHousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wareHousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWareHouseDto: UpdateWareHouseDto) {
    return this.wareHousesService.update(+id, updateWareHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wareHousesService.remove(+id);
  }
}
