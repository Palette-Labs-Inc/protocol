import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LogoService } from "./logo.service";
import { LogoControllerBase } from "./base/logo.controller.base";

@swagger.ApiTags("logos")
@common.Controller("logos")
export class LogoController extends LogoControllerBase {
  constructor(
    protected readonly service: LogoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
