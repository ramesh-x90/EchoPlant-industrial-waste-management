import { PartialType } from '@nestjs/swagger';
import { CreateCarrierOwnerDto } from './create-carrier-owner.dto';

export class UpdateCarrierOwnerDto extends PartialType(CreateCarrierOwnerDto) {}
