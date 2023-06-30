import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderDeliveryService } from "./orderDelivery.service";
import { OrderDeliveryControllerBase } from "./base/orderDelivery.controller.base";

@swagger.ApiTags("orderDeliveries")
@common.Controller("orderDeliveries")
export class OrderDeliveryController extends OrderDeliveryControllerBase {
  constructor(
    protected readonly service: OrderDeliveryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
