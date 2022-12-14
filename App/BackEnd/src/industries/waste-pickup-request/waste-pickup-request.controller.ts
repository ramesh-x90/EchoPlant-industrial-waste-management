import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WastePickupRequestService } from './waste-pickup-request.service';
import { CreateWastePickupRequestDto } from './dto/create-waste-pickup-request.dto';
import { UpdateWastePickupRequestDto } from './dto/update-waste-pickup-request.dto';

@Controller('waste-pickup-request')
export class WastePickupRequestController {
  constructor(private readonly wastePickupRequestService: WastePickupRequestService) {}

  @Post()
  create(@Body() createWastePickupRequestDto: CreateWastePickupRequestDto) {
    return this.wastePickupRequestService.create(createWastePickupRequestDto);
  }

  @Get()
  findAll() {
    return this.wastePickupRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wastePickupRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWastePickupRequestDto: UpdateWastePickupRequestDto) {
    return this.wastePickupRequestService.update(+id, updateWastePickupRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wastePickupRequestService.remove(+id);
  }
}
