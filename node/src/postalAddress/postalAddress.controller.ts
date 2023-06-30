import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PostalAddressService } from "./postalAddress.service";
import { PostalAddressControllerBase } from "./base/postalAddress.controller.base";

@swagger.ApiTags("postalAddresses")
@common.Controller("postalAddresses")
export class PostalAddressController extends PostalAddressControllerBase {
  constructor(
    protected readonly service: PostalAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
