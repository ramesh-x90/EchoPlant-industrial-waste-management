import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post()
  create(@Body() createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Get()
  findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
