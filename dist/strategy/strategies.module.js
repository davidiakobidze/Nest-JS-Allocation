"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const strategies_controller_1 = require("./strategies.controller");
const strategies_repository_1 = require("./strategies.repository");
const strategies_service_1 = require("./strategies.service");
let StrategiesModule = class StrategiesModule {
};
StrategiesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([strategies_repository_1.StrategiesRepository])],
        controllers: [strategies_controller_1.StrategiesController],
        providers: [strategies_service_1.StrategiesService],
    })
], StrategiesModule);
exports.StrategiesModule = StrategiesModule;
//# sourceMappingURL=strategies.module.js.map