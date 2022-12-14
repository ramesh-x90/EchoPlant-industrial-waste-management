import { PartialType } from '@nestjs/swagger';
import { CreateWareHouseDto } from './create-ware-house.dto';

export class UpdateWareHouseDto extends PartialType(CreateWareHouseDto) {}
