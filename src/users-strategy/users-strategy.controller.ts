import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersStrategyService } from './users-strategy.service';
import { AllocateDto } from './dto/allocate.dto';
import { UsersStrategy } from './user-strategy.entity';

@Controller('allocate')
export class UsersStrategyController {
  constructor(private allocateService: UsersStrategyService) {}

  @Get()
  getAllocations(): Promise<UsersStrategy[]> {
    return this.allocateService.getAllocations();
  }

  @Post()
  allocate(@Body() allocateDto: AllocateDto): Promise<any> {
    return this.allocateService.allocate(allocateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allocateService.remove(id);
  }
}
