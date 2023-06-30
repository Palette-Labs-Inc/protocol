import { Module } from "@nestjs/common";
import { AggregateRatingModuleBase } from "./base/aggregateRating.module.base";
import { AggregateRatingService } from "./aggregateRating.service";
import { AggregateRatingController } from "./aggregateRating.controller";

@Module({
  imports: [AggregateRatingModuleBase],
  controllers: [AggregateRatingController],
  providers: [AggregateRatingService],
  exports: [AggregateRatingService],
})
export class AggregateRatingModule {}
