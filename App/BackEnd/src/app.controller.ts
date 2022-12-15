import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';



@ApiTags('api/home')
@Controller('api/home')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: "this is the home", operationId: "getHello" })
  async getHello(): Promise<any> {
    return { message: "hello world..." };
  }




}
