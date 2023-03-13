"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entity/users.entity");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const saltOrRounds = 10;
            const password = createUserDto.password;
            const hash = await bcrypt.hash(password, saltOrRounds);
            createUserDto.password = hash;
            let newUser = this.usersRepository.create(createUserDto);
            return this.usersRepository.save(newUser);
        }
        catch (error) {
            return error;
        }
    }
    async update(updateUserDto) {
        try {
            let newUser = await this.usersRepository.update(updateUserDto.id, updateUserDto);
            let updatedUser = await this.usersRepository.findOneBy({ id: updateUserDto.id });
            console.log(newUser);
            return updatedUser;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        return this.usersRepository.find();
    }
    async findOne(id) {
        return this.usersRepository.findOneBy({ id: id });
    }
    async verifyUser(username, password) {
        try {
            let v = await this.usersRepository.createQueryBuilder()
                .select('*')
                .where('username = :username', { username: username })
                .orWhere('email = :email', { email: username })
                .getRawOne();
            console.log(v, password);
            const isMatch = await bcrypt.compare(password, v.password);
            if (isMatch) {
                delete v.password;
                return v;
            }
            else {
                return null;
            }
        }
        catch (error) {
            return null;
        }
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map