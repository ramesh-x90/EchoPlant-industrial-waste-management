import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Controller()
export class AuthController {

    constructor() {

    }

    @UseGuards(AuthGuard('google'))
    @Get('api/auth/google/signIn')
    signUp(@Req() req) {
        console.log(req.user)
        return req.user
    }


}
