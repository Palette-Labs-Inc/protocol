import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuSectionService } from "./menuSection.service";
import { MenuSectionControllerBase } from "./base/menuSection.controller.base";

@swagger.ApiTags("menuSections")
@common.Controller("menuSections")
export class MenuSectionController extends MenuSectionControllerBase {
  constructor(
    protected readonly service: MenuSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
