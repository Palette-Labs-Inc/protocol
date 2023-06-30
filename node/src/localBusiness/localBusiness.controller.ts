import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocalBusinessService } from "./localBusiness.service";
import { LocalBusinessControllerBase } from "./base/localBusiness.controller.base";

@swagger.ApiTags("localBusinesses")
@common.Controller("localBusinesses")
export class LocalBusinessController extends LocalBusinessControllerBase {
  constructor(
    protected readonly service: LocalBusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
