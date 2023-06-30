import { Module } from "@nestjs/common";
import { PaymentTermModuleBase } from "./base/paymentTerm.module.base";
import { PaymentTermService } from "./paymentTerm.service";
import { PaymentTermController } from "./paymentTerm.controller";

@Module({
  imports: [PaymentTermModuleBase],
  controllers: [PaymentTermController],
  providers: [PaymentTermService],
  exports: [PaymentTermService],
})
export class PaymentTermModule {}
