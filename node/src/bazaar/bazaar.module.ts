import { Module } from "@nestjs/common";
import { BazaarModuleBase } from "./base/bazaar.module.base";
import { BazaarService } from "./bazaar.service";
import { BazaarController } from "./bazaar.controller";

@Module({
  imports: [BazaarModuleBase],
  controllers: [BazaarController],
  providers: [BazaarService],
  exports: [BazaarService],
})
export class BazaarModule {}
