import { Module } from "@nestjs/common";
import { MenuSectionModuleBase } from "./base/menuSection.module.base";
import { MenuSectionService } from "./menuSection.service";
import { MenuSectionController } from "./menuSection.controller";

@Module({
  imports: [MenuSectionModuleBase],
  controllers: [MenuSectionController],
  providers: [MenuSectionService],
  exports: [MenuSectionService],
})
export class MenuSectionModule {}
