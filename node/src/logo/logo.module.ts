import { Module } from "@nestjs/common";
import { LogoModuleBase } from "./base/logo.module.base";
import { LogoService } from "./logo.service";
import { LogoController } from "./logo.controller";

@Module({
  imports: [LogoModuleBase],
  controllers: [LogoController],
  providers: [LogoService],
  exports: [LogoService],
})
export class LogoModule {}
