import { Module } from "@nestjs/common";
import { CourierModuleBase } from "./base/courier.module.base";
import { CourierService } from "./courier.service";
import { CourierController } from "./courier.controller";

@Module({
  imports: [CourierModuleBase],
  controllers: [CourierController],
  providers: [CourierService],
  exports: [CourierService],
})
export class CourierModule {}
