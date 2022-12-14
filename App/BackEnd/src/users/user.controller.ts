import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ConflictException, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UniqueKeyConstraintViolationException } from 'src/common/Exceptions/service-layer/UniqueKeyConstraintViolation';
import { InvalidDataException } from 'src/common/Exceptions/service-layer/InvalidDataError';
import { } from '@nestjs/core'


@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }


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


  @ApiOperation({ description: "create user with google auth" })
  @Post('auth/google')
  async createViaGoogleAuth() {
    try {
      return await this.userService.create({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      });
    } catch (error) {
      if (error instanceof UniqueKeyConstraintViolationException) {
        throw new ConflictException(error.message)
      }
      if (error instanceof InvalidDataException) {
        throw new BadRequestException(error.message)
      }
    }
  }

  @Get()
  async findAll() {
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
