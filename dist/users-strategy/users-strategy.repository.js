"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersStrategyRepository = void 0;
const typeorm_1 = require("typeorm");
const user_strategy_entity_1 = require("./user-strategy.entity");
const common_1 = require("@nestjs/common");
let UsersStrategyRepository = class UsersStrategyRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("TasksRepository", true);
    }
    async getTasks() {
    }
    async saveUserStrategy(userStrategy) {
        return await this.save(this.create(userStrategy));
    }
};
UsersStrategyRepository = __decorate([
    typeorm_1.EntityRepository(user_strategy_entity_1.UsersStrategy)
], UsersStrategyRepository);
exports.UsersStrategyRepository = UsersStrategyRepository;
//# sourceMappingURL=users-strategy.repository.js.map