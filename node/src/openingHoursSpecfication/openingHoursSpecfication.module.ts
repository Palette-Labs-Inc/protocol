import { Module } from "@nestjs/common";
import { OpeningHoursSpecficationModuleBase } from "./base/openingHoursSpecfication.module.base";
import { OpeningHoursSpecficationService } from "./openingHoursSpecfication.service";
import { OpeningHoursSpecficationController } from "./openingHoursSpecfication.controller";

@Module({
  imports: [OpeningHoursSpecficationModuleBase],
  controllers: [OpeningHoursSpecficationController],
  providers: [OpeningHoursSpecficationService],
  exports: [OpeningHoursSpecficationService],
})
export class OpeningHoursSpecficationModule {}
