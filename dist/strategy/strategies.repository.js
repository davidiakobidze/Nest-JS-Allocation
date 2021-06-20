"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategiesRepository = void 0;
const typeorm_1 = require("typeorm");
const strategy_entity_1 = require("./strategy.entity");
const common_1 = require("@nestjs/common");
let StrategiesRepository = class StrategiesRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger("TasksRepository", true);
    }
    async getTasks() {
        this.logger.log("zddddddddddddddddddddddd");
    }
    async createStrategy(createStrategyDto) {
        const { name, country } = createStrategyDto;
        const strategy = this.create({
            name,
            country
        });
        await this.save(strategy);
        return strategy;
    }
};
StrategiesRepository = __decorate([
    typeorm_1.EntityRepository(strategy_entity_1.Strategy)
], StrategiesRepository);
exports.StrategiesRepository = StrategiesRepository;
//# sourceMappingURL=strategies.repository.js.map