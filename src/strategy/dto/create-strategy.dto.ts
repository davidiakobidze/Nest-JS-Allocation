import { IsNotEmpty } from 'class-validator';

export class CreateStrategyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  country: string;
}
