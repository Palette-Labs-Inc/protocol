import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AggregateRatingServiceBase } from "./base/aggregateRating.service.base";

@Injectable()
export class AggregateRatingService extends AggregateRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
