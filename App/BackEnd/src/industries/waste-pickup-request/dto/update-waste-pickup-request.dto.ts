import { PartialType } from '@nestjs/swagger';
import { CreateWastePickupRequestDto } from './create-waste-pickup-request.dto';

export class UpdateWastePickupRequestDto extends PartialType(CreateWastePickupRequestDto) {}
