import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  ConflictException, BadRequestException, UseGuards,
  Req, Res
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UniqueKeyConstraintViolationException } from 'src/common/Exceptions/service-layer/UniqueKeyConstraintViolation';
import { InvalidDataException } from 'src/common/Exceptions/service-layer/InvalidDataError';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UserProfile } from 'src/auth/interfaces/userProfile.interface.';
import { AppConfigService } from 'src/common/config/app.config.service';


@ApiTags('api/users')
@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly appConfigService: AppConfigService) { }


  @ApiResponse({ status: 409, description: "Unique Key Constraint Violation." })
  @ApiResponse({ status: 400, description: "Invalid data" })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      if (error instanceof UniqueKeyConstraintViolationException) {
        throw new ConflictException(error.message)
      }
      if (error instanceof InvalidDataException) {
        throw new BadRequestException(error.message)
      }
    }
  }



  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Req() req: Request) {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
