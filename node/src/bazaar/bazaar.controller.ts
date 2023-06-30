import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BazaarService } from "./bazaar.service";
import { BazaarControllerBase } from "./base/bazaar.controller.base";

@swagger.ApiTags("bazaars")
@common.Controller("bazaars")
export class BazaarController extends BazaarControllerBase {
  constructor(
    protected readonly service: BazaarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
