import { PartialType } from '@nestjs/swagger';
import { CreateAcceptedWasteDto } from './create-accepted-waste.dto';

export class UpdateAcceptedWasteDto extends PartialType(CreateAcceptedWasteDto) {}
