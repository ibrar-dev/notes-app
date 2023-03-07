import { AuthService } from './auth.service';
import { Auth } from './dto/user-login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, loginBody: Auth): Promise<{
        access_token: string;
        user: any;
    }>;
}
