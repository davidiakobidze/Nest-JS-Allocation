import { IsNotEmpty } from 'class-validator';

export class CreateInstrumentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  isin: string;

  @IsNotEmpty()
  exchange: string;
}
