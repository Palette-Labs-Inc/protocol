import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Cancellation, Order } from "@prisma/client";

export class CancellationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CancellationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationCountArgs>
  ): Promise<number> {
    return this.prisma.cancellation.count(args);
  }

  async findMany<T extends Prisma.CancellationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationFindManyArgs>
  ): Promise<Cancellation[]> {
    return this.prisma.cancellation.findMany(args);
  }
  async findOne<T extends Prisma.CancellationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationFindUniqueArgs>
  ): Promise<Cancellation | null> {
    return this.prisma.cancellation.findUnique(args);
  }
  async create<T extends Prisma.CancellationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationCreateArgs>
  ): Promise<Cancellation> {
    return this.prisma.cancellation.create<T>(args);
  }
  async update<T extends Prisma.CancellationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationUpdateArgs>
  ): Promise<Cancellation> {
    return this.prisma.cancellation.update<T>(args);
  }
  async delete<T extends Prisma.CancellationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CancellationDeleteArgs>
  ): Promise<Cancellation> {
    return this.prisma.cancellation.delete(args);
  }

  async getOrderNumber(parentId: string): Promise<Order | null> {
    return this.prisma.cancellation
      .findUnique({
        where: { id: parentId },
      })
      .orderNumber();
  }
}
