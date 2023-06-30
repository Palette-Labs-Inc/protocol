import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Support, Image, Customer, Order } from "@prisma/client";

export class SupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SupportCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportCountArgs>
  ): Promise<number> {
    return this.prisma.support.count(args);
  }

  async findMany<T extends Prisma.SupportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportFindManyArgs>
  ): Promise<Support[]> {
    return this.prisma.support.findMany(args);
  }
  async findOne<T extends Prisma.SupportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportFindUniqueArgs>
  ): Promise<Support | null> {
    return this.prisma.support.findUnique(args);
  }
  async create<T extends Prisma.SupportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportCreateArgs>
  ): Promise<Support> {
    return this.prisma.support.create<T>(args);
  }
  async update<T extends Prisma.SupportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportUpdateArgs>
  ): Promise<Support> {
    return this.prisma.support.update<T>(args);
  }
  async delete<T extends Prisma.SupportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportDeleteArgs>
  ): Promise<Support> {
    return this.prisma.support.delete(args);
  }

  async findPhoto(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.support
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .photo(args);
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.support
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getOrderNumber(parentId: string): Promise<Order | null> {
    return this.prisma.support
      .findUnique({
        where: { id: parentId },
      })
      .orderNumber();
  }
}
