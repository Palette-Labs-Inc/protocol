import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NutritionInformationService } from "./nutritionInformation.service";
import { NutritionInformationControllerBase } from "./base/nutritionInformation.controller.base";

@swagger.ApiTags("nutritionInformations")
@common.Controller("nutritionInformations")
export class NutritionInformationController extends NutritionInformationControllerBase {
  constructor(
    protected readonly service: NutritionInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
