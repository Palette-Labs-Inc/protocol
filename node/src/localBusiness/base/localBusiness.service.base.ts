import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  LocalBusiness,
  Review,
  OpeningHoursSpecfication,
  Image,
  Order,
  PaymentTerm,
  Menu,
  AggregateRating,
  Logo,
  PostalAddress,
  Organization,
  Bazaar,
} from "@prisma/client";

export class LocalBusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LocalBusinessCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessCountArgs>
  ): Promise<number> {
    return this.prisma.localBusiness.count(args);
  }

  async findMany<T extends Prisma.LocalBusinessFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessFindManyArgs>
  ): Promise<LocalBusiness[]> {
    return this.prisma.localBusiness.findMany(args);
  }
  async findOne<T extends Prisma.LocalBusinessFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessFindUniqueArgs>
  ): Promise<LocalBusiness | null> {
    return this.prisma.localBusiness.findUnique(args);
  }
  async create<T extends Prisma.LocalBusinessCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessCreateArgs>
  ): Promise<LocalBusiness> {
    return this.prisma.localBusiness.create<T>(args);
  }
  async update<T extends Prisma.LocalBusinessUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessUpdateArgs>
  ): Promise<LocalBusiness> {
    return this.prisma.localBusiness.update<T>(args);
  }
  async delete<T extends Prisma.LocalBusinessDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocalBusinessDeleteArgs>
  ): Promise<LocalBusiness> {
    return this.prisma.localBusiness.delete(args);
  }

  async findReview(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .review(args);
  }

  async findOpeningHoursSpecification(
    parentId: string,
    args: Prisma.OpeningHoursSpecficationFindManyArgs
  ): Promise<OpeningHoursSpecfication[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .openingHoursSpecification(args);
  }

  async findPhoto(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .photo(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Order(args);
  }

  async findPaymentTerm(
    parentId: string,
    args: Prisma.PaymentTermFindManyArgs
  ): Promise<PaymentTerm[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .PaymentTerm(args);
  }

  async findHasMenu(
    parentId: string,
    args: Prisma.MenuFindManyArgs
  ): Promise<Menu[]> {
    return this.prisma.localBusiness
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .hasMenu(args);
  }

  async getAggregateRating(parentId: string): Promise<AggregateRating | null> {
    return this.prisma.localBusiness
      .findUnique({
        where: { id: parentId },
      })
      .aggregateRating();
  }

  async getLogo(parentId: string): Promise<Logo | null> {
    return this.prisma.localBusiness
      .findUnique({
        where: { id: parentId },
      })
      .logo();
  }

  async getAddress(parentId: string): Promise<PostalAddress | null> {
    return this.prisma.localBusiness
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getParentOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.localBusiness
      .findUnique({
        where: { id: parentId },
      })
      .parentOrganization();
  }

  async getBazaar(parentId: string): Promise<Bazaar | null> {
    return this.prisma.localBusiness
      .findUnique({
        where: { id: parentId },
      })
      .Bazaar();
  }
}
