import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Bazaar,
  LocalBusiness,
  Promotion,
  Courier,
} from "@prisma/client";

export class BazaarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BazaarCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarCountArgs>
  ): Promise<number> {
    return this.prisma.bazaar.count(args);
  }

  async findMany<T extends Prisma.BazaarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarFindManyArgs>
  ): Promise<Bazaar[]> {
    return this.prisma.bazaar.findMany(args);
  }
  async findOne<T extends Prisma.BazaarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarFindUniqueArgs>
  ): Promise<Bazaar | null> {
    return this.prisma.bazaar.findUnique(args);
  }
  async create<T extends Prisma.BazaarCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarCreateArgs>
  ): Promise<Bazaar> {
    return this.prisma.bazaar.create<T>(args);
  }
  async update<T extends Prisma.BazaarUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarUpdateArgs>
  ): Promise<Bazaar> {
    return this.prisma.bazaar.update<T>(args);
  }
  async delete<T extends Prisma.BazaarDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BazaarDeleteArgs>
  ): Promise<Bazaar> {
    return this.prisma.bazaar.delete(args);
  }

  async findLocalBusinesses(
    parentId: string,
    args: Prisma.LocalBusinessFindManyArgs
  ): Promise<LocalBusiness[]> {
    return this.prisma.bazaar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .localBusinesses(args);
  }

  async findPromotions(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.bazaar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotions(args);
  }

  async findCourier(
    parentId: string,
    args: Prisma.CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.prisma.bazaar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Courier(args);
  }
}
