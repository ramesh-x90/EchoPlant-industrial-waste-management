import { BadRequestException, Get, Req, Res, UseGuards, Controller } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Request, Response } from "express";
import { AppConfigService } from "src/common/config/app.config.service";
import { InvalidDataException } from "src/common/Exceptions/service-layer/InvalidDataError";
import { UniqueKeyConstraintViolationException } from "src/common/Exceptions/service-layer/UniqueKeyConstraintViolation";
import { UserService } from "src/users/user.service";
import { AuthService } from "./auth.service";
import { UserProfile } from "./interfaces/userProfile.interface.";


@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly appConfigService: AppConfigService) {

    }

    @ApiOperation({ description: "Google authentication" })
    @UseGuards(AuthGuard('google'))
    @Get('/google')
    async googleAuth(@Req() req: Request, @Res() res: Response) {


        const { email, firstName, lastName, picture } = req.user as UserProfile

        const { access_token, refresh_token } = this.authService.login({
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
            expires: new Date(Date.now() + this.appConfigService.getJwtAccessTokenExp() * 1000),
            httpOnly: true,
        }).cookie("_refresh_token", refresh_token, {
            expires: new Date(Date.now() + this.appConfigService.getJwtRefreshTokenExp() * 1000),
            httpOnly: true,
        });



        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Echo-Plant | API</title>
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
                            <script>
                            
                            window.localStorage.setItem("loginDone" , true)
                            </script>
        </body>
        
        </html>`)
    }

}