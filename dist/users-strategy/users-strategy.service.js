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
exports.UsersStrategyService = void 0;
const common_1 = require("@nestjs/common");
const users_strategy_repository_1 = require("./users-strategy.repository");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("../users/users.repository");
let UsersStrategyService = class UsersStrategyService {
    constructor(usersStrategyRepository, usersRepository) {
        this.usersStrategyRepository = usersStrategyRepository;
        this.usersRepository = usersRepository;
    }
    getTasks() {
        return this.usersStrategyRepository.getTasks();
    }
    async allocate(allocateDto) {
        const { strategyPercentage, usersIds } = allocateDto;
        const sumStrategiesPercentage = strategyPercentage.reduce((total, strategyPercentage) => {
            return total += strategyPercentage.percent;
        }, 0);
        const users = await this.usersRepository.findByIds(usersIds);
        const savedUserStrategies = [];
        users.forEach(user => {
            if (user.available < sumStrategiesPercentage) {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    error: `User ${user.name} can't allocate amount of ${sumStrategiesPercentage}%`
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
        for (const user of users) {
            for (const sp of strategyPercentage) {
                const userStrategy = {
                    user: user.id,
                    strategy: sp.id,
                    percentage: sp.percent
                };
                let savedUserStrategy = await this.usersStrategyRepository.saveUserStrategy(userStrategy);
                savedUserStrategies.push(savedUserStrategy);
            }
            let newAvailable = user.available - sumStrategiesPercentage;
            await this.usersRepository.updateAvailableById(user.id, newAvailable);
        }
        return savedUserStrategies;
    }
};
UsersStrategyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_strategy_repository_1.UsersStrategyRepository)),
    __param(1, typeorm_1.InjectRepository(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [users_strategy_repository_1.UsersStrategyRepository,
        users_repository_1.UsersRepository])
], UsersStrategyService);
exports.UsersStrategyService = UsersStrategyService;
//# sourceMappingURL=users-strategy.service.js.map