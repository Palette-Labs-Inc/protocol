import { Module } from "@nestjs/common";
import { PromotionModuleBase } from "./base/promotion.module.base";
import { PromotionService } from "./promotion.service";
import { PromotionController } from "./promotion.controller";

@Module({
  imports: [PromotionModuleBase],
  controllers: [PromotionController],
  providers: [PromotionService],
  exports: [PromotionService],
})
export class PromotionModule {}
