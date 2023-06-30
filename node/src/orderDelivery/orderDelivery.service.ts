import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderDeliveryServiceBase } from "./base/orderDelivery.service.base";

@Injectable()
export class OrderDeliveryService extends OrderDeliveryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
