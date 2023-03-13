import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): any;
    create(createUserDto: CreateUserDto): Promise<User>;
}
