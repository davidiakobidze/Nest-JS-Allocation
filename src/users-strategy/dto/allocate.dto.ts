import { IsNotEmpty, Max, Min, ValidateNested } from "class-validator";

export class StrategyPercentageObject {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @Min(1)
  @Max(100)
  percent: number;
}

export class AllocateDto {
  @ValidateNested()
  strategyPercentage: StrategyPercentageObject[];

  @IsNotEmpty()
  usersIds: string[];
}
