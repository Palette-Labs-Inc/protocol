import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentTermService } from "./paymentTerm.service";
import { PaymentTermControllerBase } from "./base/paymentTerm.controller.base";

@swagger.ApiTags("paymentTerms")
@common.Controller("paymentTerms")
export class PaymentTermController extends PaymentTermControllerBase {
  constructor(
    protected readonly service: PaymentTermService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
