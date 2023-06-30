import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OrderDelivery, Order, Courier } from "@prisma/client";

export class OrderDeliveryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderDeliveryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryCountArgs>
  ): Promise<number> {
    return this.prisma.orderDelivery.count(args);
  }

  async findMany<T extends Prisma.OrderDeliveryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryFindManyArgs>
  ): Promise<OrderDelivery[]> {
    return this.prisma.orderDelivery.findMany(args);
  }
  async findOne<T extends Prisma.OrderDeliveryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryFindUniqueArgs>
  ): Promise<OrderDelivery | null> {
    return this.prisma.orderDelivery.findUnique(args);
  }
  async create<T extends Prisma.OrderDeliveryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryCreateArgs>
  ): Promise<OrderDelivery> {
    return this.prisma.orderDelivery.create<T>(args);
  }
  async update<T extends Prisma.OrderDeliveryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryUpdateArgs>
  ): Promise<OrderDelivery> {
    return this.prisma.orderDelivery.update<T>(args);
  }
  async delete<T extends Prisma.OrderDeliveryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeliveryDeleteArgs>
  ): Promise<OrderDelivery> {
    return this.prisma.orderDelivery.delete(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.orderDelivery
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Order(args);
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.orderDelivery
      .findUnique({
        where: { id: parentId },
      })
      .courier();
  }
}
