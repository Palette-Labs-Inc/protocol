import { Module } from "@nestjs/common";
import { LocalBusinessModuleBase } from "./base/localBusiness.module.base";
import { LocalBusinessService } from "./localBusiness.service";
import { LocalBusinessController } from "./localBusiness.controller";

@Module({
  imports: [LocalBusinessModuleBase],
  controllers: [LocalBusinessController],
  providers: [LocalBusinessService],
  exports: [LocalBusinessService],
})
export class LocalBusinessModule {}
