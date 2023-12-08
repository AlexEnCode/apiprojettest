import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): string;
    getByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
    updateByUUID(uuid: string, updateUserDto: UpdateUserDto): Promise<{
        message: string;
        data: any;
    }>;
    deleteByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
}
