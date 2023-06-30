import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VehicleService } from "./vehicle.service";
import { VehicleControllerBase } from "./base/vehicle.controller.base";

@swagger.ApiTags("vehicles")
@common.Controller("vehicles")
export class VehicleController extends VehicleControllerBase {
  constructor(
    protected readonly service: VehicleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
