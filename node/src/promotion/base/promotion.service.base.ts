import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Promotion,
  OpeningHoursSpecfication,
  Order,
  Bazaar,
} from "@prisma/client";

export class PromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PromotionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionCountArgs>
  ): Promise<number> {
    return this.prisma.promotion.count(args);
  }

  async findMany<T extends Prisma.PromotionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionFindManyArgs>
  ): Promise<Promotion[]> {
    return this.prisma.promotion.findMany(args);
  }
  async findOne<T extends Prisma.PromotionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionFindUniqueArgs>
  ): Promise<Promotion | null> {
    return this.prisma.promotion.findUnique(args);
  }
  async create<T extends Prisma.PromotionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionCreateArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.create<T>(args);
  }
  async update<T extends Prisma.PromotionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionUpdateArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.update<T>(args);
  }
  async delete<T extends Prisma.PromotionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionDeleteArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.delete(args);
  }

  async findOpeningHours(
    parentId: string,
    args: Prisma.OpeningHoursSpecficationFindManyArgs
  ): Promise<OpeningHoursSpecfication[]> {
    return this.prisma.promotion
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .openingHours(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.promotion
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Order(args);
  }

  async getBazaar(parentId: string): Promise<Bazaar | null> {
    return this.prisma.promotion
      .findUnique({
        where: { id: parentId },
      })
      .Bazaar();
  }
}
