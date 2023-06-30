import { Module } from "@nestjs/common";
import { CancellationModuleBase } from "./base/cancellation.module.base";
import { CancellationService } from "./cancellation.service";
import { CancellationController } from "./cancellation.controller";

@Module({
  imports: [CancellationModuleBase],
  controllers: [CancellationController],
  providers: [CancellationService],
  exports: [CancellationService],
})
export class CancellationModule {}
