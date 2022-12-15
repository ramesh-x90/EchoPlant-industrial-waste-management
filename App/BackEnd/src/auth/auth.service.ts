import { Injectable } from "@nestjs/common";
import { UserProfile } from "./interfaces/userProfile.interface.";
import { JwtService } from '@nestjs/jwt';
import { Request } from "express";
import { UserService } from "src/users/user.service";
import { AppConfigService } from "src/common/config/app.config.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        private readonly appConfigService: AppConfigService
    ) { }

    login(user: UserProfile) {

        const payload: BaseUserAuthJwtPayLoad = { email: user.email, firstName: user.firstName, lastName: user.lastName }
        return {
            access_token: this.jwtService.sign(payload, { expiresIn: this.appConfigService.getJwtAccessTokenExp() }),
            refresh_token: this.jwtService.sign(payload, { expiresIn: this.appConfigService.getJwtRefreshTokenExp() }),
        };
    }

    tokenRefresh(req: Request,) {
        // req.
    }
}