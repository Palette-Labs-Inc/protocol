import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItemServiceBase } from "./base/orderItem.service.base";

@Injectable()
export class OrderItemService extends OrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
