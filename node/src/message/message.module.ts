import { Module } from "@nestjs/common";
import { MessageModuleBase } from "./base/message.module.base";
import { MessageService } from "./message.service";
import { MessageController } from "./message.controller";

@Module({
  imports: [MessageModuleBase],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
