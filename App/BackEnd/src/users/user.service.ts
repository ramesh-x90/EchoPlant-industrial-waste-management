import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime';
import { UniqueKeyConstraintViolationException } from 'src/common/Exceptions/service-layer/UniqueKeyConstraintViolation';
import { PrismaService } from 'src/common/prisma-module/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {


  constructor(private prismaService: PrismaService) {

  }

  async create(createUserDto: CreateUserDto) {
    try {

      return await this.prismaService.user.create({
        data: {
          email: createUserDto.email,
          firstName: createUserDto.firstName,
          lastName: createUserDto.lastName
        }
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new UniqueKeyConstraintViolationException(error.meta.target as string[])

      }
      if (error instanceof PrismaClientValidationError) {
        throw { error: "invalid data" }
      }
    }
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.user.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id
      },
      data: {
        email: updateUserDto.email ? updateUserDto.email : undefined,
        firstName: updateUserDto.firstName ? updateUserDto.firstName : undefined,
        lastName: updateUserDto.lastName ? updateUserDto.lastName : undefined
      }
    })
  }

  async remove(id: number) {
    return await this.prismaService.user.delete(
      {
        where: {
          id
        },
        include: {
          profile: true
        }
      }
    );

  }
}
