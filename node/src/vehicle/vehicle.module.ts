import { Module } from "@nestjs/common";
import { VehicleModuleBase } from "./base/vehicle.module.base";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";

@Module({
  imports: [VehicleModuleBase],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
