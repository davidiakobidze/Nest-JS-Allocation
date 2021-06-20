import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersStrategyService } from './users-strategy.service';
import { Logger } from '@nestjs/common';
import { AllocateDto } from "./dto/allocate.dto";
import { User } from "../users/user.entity";

@Controller('allocate')
export class UsersStrategyController {
  private logger = new Logger('TasksController');

  constructor(private usersService: UsersStrategyService) {}

  @Get()
  getTasks(): Promise<void> {
    return this.usersService.getTasks();
  }

  @Post()
  allocate(
    @Body() allocateDto: AllocateDto
  ): Promise<any> {
    return this.usersService.allocate(allocateDto);
  }
}
