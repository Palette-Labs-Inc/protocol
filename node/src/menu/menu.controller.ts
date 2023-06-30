import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuService } from "./menu.service";
import { MenuControllerBase } from "./base/menu.controller.base";

@swagger.ApiTags("menus")
@common.Controller("menus")
export class MenuController extends MenuControllerBase {
  constructor(
    protected readonly service: MenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
