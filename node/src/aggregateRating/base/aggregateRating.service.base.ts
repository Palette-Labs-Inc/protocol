import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AggregateRating,
  LocalBusiness,
  Customer,
} from "@prisma/client";

export class AggregateRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AggregateRatingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingCountArgs>
  ): Promise<number> {
    return this.prisma.aggregateRating.count(args);
  }

  async findMany<T extends Prisma.AggregateRatingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingFindManyArgs>
  ): Promise<AggregateRating[]> {
    return this.prisma.aggregateRating.findMany(args);
  }
  async findOne<T extends Prisma.AggregateRatingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingFindUniqueArgs>
  ): Promise<AggregateRating | null> {
    return this.prisma.aggregateRating.findUnique(args);
  }
  async create<T extends Prisma.AggregateRatingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingCreateArgs>
  ): Promise<AggregateRating> {
    return this.prisma.aggregateRating.create<T>(args);
  }
  async update<T extends Prisma.AggregateRatingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingUpdateArgs>
  ): Promise<AggregateRating> {
    return this.prisma.aggregateRating.update<T>(args);
  }
  async delete<T extends Prisma.AggregateRatingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AggregateRatingDeleteArgs>
  ): Promise<AggregateRating> {
    return this.prisma.aggregateRating.delete(args);
  }

  async findLocalBusiness(
    parentId: string,
    args: Prisma.LocalBusinessFindManyArgs
  ): Promise<LocalBusiness[]> {
    return this.prisma.aggregateRating
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .LocalBusiness(args);
  }

  async getAuthor(parentId: string): Promise<Customer | null> {
    return this.prisma.aggregateRating
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }
}
