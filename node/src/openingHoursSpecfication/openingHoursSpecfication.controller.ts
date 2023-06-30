import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpeningHoursSpecficationService } from "./openingHoursSpecfication.service";
import { OpeningHoursSpecficationControllerBase } from "./base/openingHoursSpecfication.controller.base";

@swagger.ApiTags("openingHoursSpecfications")
@common.Controller("openingHoursSpecfications")
export class OpeningHoursSpecficationController extends OpeningHoursSpecficationControllerBase {
  constructor(
    protected readonly service: OpeningHoursSpecficationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
