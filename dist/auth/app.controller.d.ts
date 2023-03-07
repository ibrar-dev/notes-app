import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: {
        user: {
            username: string;
            password: string;
        };
    }): Promise<any>;
    getProfile(req: any): any;
}
