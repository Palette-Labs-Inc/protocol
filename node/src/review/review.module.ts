import { Module } from "@nestjs/common";
import { ReviewModuleBase } from "./base/review.module.base";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";

@Module({
  imports: [ReviewModuleBase],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
