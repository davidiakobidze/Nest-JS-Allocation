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
exports.StrategiesService = void 0;
const common_1 = require("@nestjs/common");
const strategies_repository_1 = require("./strategies.repository");
const typeorm_1 = require("@nestjs/typeorm");
let StrategiesService = class StrategiesService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    getTasks() {
        return this.tasksRepository.getTasks();
    }
    createStrategy(createStrategyDto) {
        return this.tasksRepository.createStrategy(createStrategyDto);
    }
};
StrategiesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(strategies_repository_1.StrategiesRepository)),
    __metadata("design:paramtypes", [strategies_repository_1.StrategiesRepository])
], StrategiesService);
exports.StrategiesService = StrategiesService;
//# sourceMappingURL=strategies.service.js.map