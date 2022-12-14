import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecyclersService } from './recyclers.service';
import { CreateRecyclerDto } from './dto/create-recycler.dto';
import { UpdateRecyclerDto } from './dto/update-recycler.dto';

@Controller('recyclers')
export class RecyclersController {
  constructor(private readonly recyclersService: RecyclersService) {}

  @Post()
  create(@Body() createRecyclerDto: CreateRecyclerDto) {
    return this.recyclersService.create(createRecyclerDto);
  }

  @Get()
  findAll() {
    return this.recyclersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recyclersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecyclerDto: UpdateRecyclerDto) {
    return this.recyclersService.update(+id, updateRecyclerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recyclersService.remove(+id);
  }
}
