import { PartialType } from '@nestjs/swagger';
import { CreateRecyclerDto } from './create-recycler.dto';

export class UpdateRecyclerDto extends PartialType(CreateRecyclerDto) {}
