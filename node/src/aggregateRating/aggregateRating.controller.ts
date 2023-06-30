import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AggregateRatingService } from "./aggregateRating.service";
import { AggregateRatingControllerBase } from "./base/aggregateRating.controller.base";

@swagger.ApiTags("aggregateRatings")
@common.Controller("aggregateRatings")
export class AggregateRatingController extends AggregateRatingControllerBase {
  constructor(
    protected readonly service: AggregateRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
