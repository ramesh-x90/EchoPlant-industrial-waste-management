import { PartialType } from '@nestjs/swagger';
import { CreateTransportServiceDto } from './create-transport-service.dto';

export class UpdateTransportServiceDto extends PartialType(CreateTransportServiceDto) {}
