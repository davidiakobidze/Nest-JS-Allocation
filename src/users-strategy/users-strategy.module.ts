import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersStrategyController } from "./users-strategy.controller";
import { UsersStrategyRepository } from "./users-strategy.repository";
import { UsersStrategyService } from "./users-strategy.service";
import { UsersRepository } from "../users/users.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UsersStrategyRepository, UsersRepository])],
  controllers: [UsersStrategyController],
  providers: [UsersStrategyService]
})
export class UsersStrategyModule {
}
