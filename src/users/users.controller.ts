import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Controller("users")
export class UsersController {
  private logger = new Logger("TasksController");

  constructor(private usersService: UsersService) {
  }

  @Get()
  getTasks(): Promise<void> {
    return this.usersService.getTasks();
  }

  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }
}
