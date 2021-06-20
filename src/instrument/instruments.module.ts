import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentController } from './instrument.controller';
import { InstrumentsRepository } from './instruments.repository';
import { InstrumentsService } from './instruments.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstrumentsRepository])],
  controllers: [InstrumentController],
  providers: [InstrumentsService],
})
export class InstrumentsModule {}
