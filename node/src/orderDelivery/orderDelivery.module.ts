import { Module } from "@nestjs/common";
import { OrderDeliveryModuleBase } from "./base/orderDelivery.module.base";
import { OrderDeliveryService } from "./orderDelivery.service";
import { OrderDeliveryController } from "./orderDelivery.controller";

@Module({
  imports: [OrderDeliveryModuleBase],
  controllers: [OrderDeliveryController],
  providers: [OrderDeliveryService],
  exports: [OrderDeliveryService],
})
export class OrderDeliveryModule {}
