import { Module } from "@nestjs/common";
import { QuoteModuleBase } from "./base/quote.module.base";
import { QuoteService } from "./quote.service";
import { QuoteController } from "./quote.controller";

@Module({
  imports: [QuoteModuleBase],
  controllers: [QuoteController],
  providers: [QuoteService],
  exports: [QuoteService],
})
export class QuoteModule {}
