import { Module } from "@nestjs/common";
import { NutritionInformationModuleBase } from "./base/nutritionInformation.module.base";
import { NutritionInformationService } from "./nutritionInformation.service";
import { NutritionInformationController } from "./nutritionInformation.controller";

@Module({
  imports: [NutritionInformationModuleBase],
  controllers: [NutritionInformationController],
  providers: [NutritionInformationService],
  exports: [NutritionInformationService],
})
export class NutritionInformationModule {}
