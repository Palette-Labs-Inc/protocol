import { Module } from "@nestjs/common";
import { NodeModuleBase } from "./base/node.module.base";
import { NodeService } from "./node.service";
import { NodeController } from "./node.controller";

@Module({
  imports: [NodeModuleBase],
  controllers: [NodeController],
  providers: [NodeService],
  exports: [NodeService],
})
export class NodeModule {}
