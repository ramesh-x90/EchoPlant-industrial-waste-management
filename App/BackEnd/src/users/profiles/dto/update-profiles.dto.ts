import { PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './create-profiles.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) { }
