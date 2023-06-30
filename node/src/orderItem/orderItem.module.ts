import { Module } from "@nestjs/common";
import { OrderItemModuleBase } from "./base/orderItem.module.base";
import { OrderItemService } from "./orderItem.service";
import { OrderItemController } from "./orderItem.controller";

@Module({
  imports: [OrderItemModuleBase],
  controllers: [OrderItemController],
  providers: [OrderItemService],
  exports: [OrderItemService],
})
export class OrderItemModule {}
