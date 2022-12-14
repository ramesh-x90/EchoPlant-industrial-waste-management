import { Injectable } from "@nestjs/common";
import { UserProfile } from "./interfaces/userProfile.interface.";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    login(user: UserProfile) {
        const payload: BaseUserAuthJwtPayLoad = { email: user.email, firstName: user.firstName, lastName: user.lastName }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}