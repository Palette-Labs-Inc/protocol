import { Module } from "@nestjs/common";
import { PostalAddressModuleBase } from "./base/postalAddress.module.base";
import { PostalAddressService } from "./postalAddress.service";
import { PostalAddressController } from "./postalAddress.controller";

@Module({
  imports: [PostalAddressModuleBase],
  controllers: [PostalAddressController],
  providers: [PostalAddressService],
  exports: [PostalAddressService],
})
export class PostalAddressModule {}
