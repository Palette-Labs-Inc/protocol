import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Order,
  OrderItem,
  Cancellation,
  Support,
  Message,
  LocalBusiness,
  OrderDelivery,
  Customer,
  Promotion,
  PaymentTerm,
  PostalAddress,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCountArgs>
  ): Promise<number> {
    return this.prisma.order.count(args);
  }

  async findMany<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
  async findOne<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<Order | null> {
    return this.prisma.order.findUnique(args);
  }
  async create<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    return this.prisma.order.create<T>(args);
  }
  async update<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<Order> {
    return this.prisma.order.update<T>(args);
  }
  async delete<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async findOrderedItem(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderedItem(args);
  }

  async findCancellation(
    parentId: string,
    args: Prisma.CancellationFindManyArgs
  ): Promise<Cancellation[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Cancellation(args);
  }

  async findSupport(
    parentId: string,
    args: Prisma.SupportFindManyArgs
  ): Promise<Support[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Support(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Messages(args);
  }

  async getSeller(parentId: string): Promise<LocalBusiness | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }

  async getOrderDelivery(parentId: string): Promise<OrderDelivery | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .orderDelivery();
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getDiscount(parentId: string): Promise<Promotion | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .discount();
  }

  async getPaymentTerm(parentId: string): Promise<PaymentTerm | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .paymentTerm();
  }

  async getDeliveryAddress(parentId: string): Promise<PostalAddress | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .deliveryAddress();
  }
}
