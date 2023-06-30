import { Module } from "@nestjs/common";
import { MenuItemModuleBase } from "./base/menuItem.module.base";
import { MenuItemService } from "./menuItem.service";
import { MenuItemController } from "./menuItem.controller";

@Module({
  imports: [MenuItemModuleBase],
  controllers: [MenuItemController],
  providers: [MenuItemService],
  exports: [MenuItemService],
})
export class MenuItemModule {}
