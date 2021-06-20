"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersStrategyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_strategy_controller_1 = require("./users-strategy.controller");
const users_strategy_repository_1 = require("./users-strategy.repository");
const users_strategy_service_1 = require("./users-strategy.service");
const users_repository_1 = require("../users/users.repository");
let UsersStrategyModule = class UsersStrategyModule {
};
UsersStrategyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_strategy_repository_1.UsersStrategyRepository, users_repository_1.UsersRepository])],
        controllers: [users_strategy_controller_1.UsersStrategyController],
        providers: [users_strategy_service_1.UsersStrategyService]
    })
], UsersStrategyModule);
exports.UsersStrategyModule = UsersStrategyModule;
//# sourceMappingURL=users-strategy.module.js.map