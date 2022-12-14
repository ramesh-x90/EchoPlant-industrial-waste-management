import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcceptedWasteService } from './accepted-waste.service';
import { CreateAcceptedWasteDto } from './dto/create-accepted-waste.dto';
import { UpdateAcceptedWasteDto } from './dto/update-accepted-waste.dto';

@Controller('accepted-waste')
export class AcceptedWasteController {
  constructor(private readonly acceptedWasteService: AcceptedWasteService) {}

  @Post()
  create(@Body() createAcceptedWasteDto: CreateAcceptedWasteDto) {
    return this.acceptedWasteService.create(createAcceptedWasteDto);
  }

  @Get()
  findAll() {
    return this.acceptedWasteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acceptedWasteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcceptedWasteDto: UpdateAcceptedWasteDto) {
    return this.acceptedWasteService.update(+id, updateAcceptedWasteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acceptedWasteService.remove(+id);
  }
}
