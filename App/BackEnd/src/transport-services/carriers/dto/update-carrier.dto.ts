import { PartialType } from '@nestjs/swagger';
import { CreateCarrierDto } from './create-carrier.dto';

export class UpdateCarrierDto extends PartialType(CreateCarrierDto) {}
