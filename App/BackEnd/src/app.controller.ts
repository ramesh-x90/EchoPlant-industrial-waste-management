import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';



class Res{
  @ApiProperty()
  appName: string
}


@ApiTags('home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: "this is the home" , operationId : "getHello"})
  // @ApiResponse({status : 200 , description : "home" , type : Res})
  async getHello() : Promise<any>{
    return await this.appService.getHello();
  }




}
