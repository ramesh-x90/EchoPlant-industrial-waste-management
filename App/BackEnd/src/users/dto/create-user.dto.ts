import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"




export class CreateUserDto {

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string


}
