import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromotionService } from "./promotion.service";
import { PromotionControllerBase } from "./base/promotion.controller.base";

@swagger.ApiTags("promotions")
@common.Controller("promotions")
export class PromotionController extends PromotionControllerBase {
  constructor(
    protected readonly service: PromotionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
