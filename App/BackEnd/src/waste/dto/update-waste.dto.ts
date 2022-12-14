import { PartialType } from '@nestjs/swagger';
import { CreateWasteDto } from './create-waste.dto';

export class UpdateWasteDto extends PartialType(CreateWasteDto) {}
