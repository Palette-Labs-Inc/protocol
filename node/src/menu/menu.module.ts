import { Module } from "@nestjs/common";
import { MenuModuleBase } from "./base/menu.module.base";
import { MenuService } from "./menu.service";
import { MenuController } from "./menu.controller";

@Module({
  imports: [MenuModuleBase],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuModule {}
