import { Module } from "@nestjs/common";
import { SupportModuleBase } from "./base/support.module.base";
import { SupportService } from "./support.service";
import { SupportController } from "./support.controller";

@Module({
  imports: [SupportModuleBase],
  controllers: [SupportController],
  providers: [SupportService],
  exports: [SupportService],
})
export class SupportModule {}
