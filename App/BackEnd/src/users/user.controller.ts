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
import { UserProfile } from './auth/interfaces/userProfile.interface.';
import { AuthService } from './auth/auth.service';


@ApiTags('api/users')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly authService: AuthService) { }


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
  @UseGuards(AuthGuard('google'))
  @Get('auth/google')
  async createViaGoogleAuth(@Req() req: Request, @Res() res: Response) {


    const { email, firstName, lastName, picture } = req.user as UserProfile

    const { access_token } = this.authService.login({
      email, firstName, lastName, picture
    })


    try {
      return await this.userService.create({
        email,
        firstName,
        lastName,
        password: ""
      });
    } catch (error) {
      if (error instanceof UniqueKeyConstraintViolationException) {
        // return res.end('You all ready have an account sign in please')
      }
      if (error instanceof InvalidDataException) {
        throw new BadRequestException(error.message)
      }
    }




    res.cookie("_access_token", access_token, {
      expires: new Date(Date.now() + 10 * 24 * 3600 * 1000),
      httpOnly: true,
    });
    res.send(`<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      
      <body>
          <h1 style="text-align: center;">&nbsp;</h1>
          <h1 style="text-align: center;">&nbsp;</h1>
          <h1 style="text-align: center;"><span style="color: #339966;">Echo-Plant</span></h1>
          <p>&nbsp;</p>
          <p style="text-align: center;"><span style="color: #808080;"><strong><em>We appreciate your support ${firstName} ${lastName}</em></strong></span></p>
          <p style="text-align: left;">&nbsp;</p>
          <p style="text-align: center;"><em><span style="color: #808080;"><strong>Check Your email to validate your
                          account.</strong></span></em></p>
      </body>
      
      </html>`)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Req() req: Request) {
    console.log(req.user)
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
