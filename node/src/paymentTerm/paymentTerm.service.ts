import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentTermServiceBase } from "./base/paymentTerm.service.base";

@Injectable()
export class PaymentTermService extends PaymentTermServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
