"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instrument_controller_1 = require("./instrument.controller");
const instruments_repository_1 = require("./instruments.repository");
const instruments_service_1 = require("./instruments.service");
let InstrumentsModule = class InstrumentsModule {
};
InstrumentsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([instruments_repository_1.InstrumentsRepository])],
        controllers: [instrument_controller_1.InstrumentController],
        providers: [instruments_service_1.InstrumentsService],
    })
], InstrumentsModule);
exports.InstrumentsModule = InstrumentsModule;
//# sourceMappingURL=instruments.module.js.map