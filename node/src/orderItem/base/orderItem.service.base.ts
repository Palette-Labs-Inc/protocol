import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OrderItem, Order, MenuItem, Quote } from "@prisma/client";

export class OrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderItemCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemCountArgs>
  ): Promise<number> {
    return this.prisma.orderItem.count(args);
  }

  async findMany<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany(args);
  }
  async findOne<T extends Prisma.OrderItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindUniqueArgs>
  ): Promise<OrderItem | null> {
    return this.prisma.orderItem.findUnique(args);
  }
  async create<T extends Prisma.OrderItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.create<T>(args);
  }
  async update<T extends Prisma.OrderItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.update<T>(args);
  }
  async delete<T extends Prisma.OrderItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.delete(args);
  }

  async getOrder(parentId: string): Promise<Order | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .Order();
  }

  async getOrderedItem(parentId: string): Promise<MenuItem | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .orderedItem();
  }

  async getQuote(parentId: string): Promise<Quote | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .Quote();
  }
}
