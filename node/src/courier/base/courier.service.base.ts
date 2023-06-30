import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Courier,
  Review,
  OrderDelivery,
  PostalAddress,
  Vehicle,
  Bazaar,
} from "@prisma/client";

export class CourierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourierCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierCountArgs>
  ): Promise<number> {
    return this.prisma.courier.count(args);
  }

  async findMany<T extends Prisma.CourierFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindManyArgs>
  ): Promise<Courier[]> {
    return this.prisma.courier.findMany(args);
  }
  async findOne<T extends Prisma.CourierFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierFindUniqueArgs>
  ): Promise<Courier | null> {
    return this.prisma.courier.findUnique(args);
  }
  async create<T extends Prisma.CourierCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierCreateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.create<T>(args);
  }
  async update<T extends Prisma.CourierUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierUpdateArgs>
  ): Promise<Courier> {
    return this.prisma.courier.update<T>(args);
  }
  async delete<T extends Prisma.CourierDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourierDeleteArgs>
  ): Promise<Courier> {
    return this.prisma.courier.delete(args);
  }

  async findReview(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .review(args);
  }

  async findOrderDelivery(
    parentId: string,
    args: Prisma.OrderDeliveryFindManyArgs
  ): Promise<OrderDelivery[]> {
    return this.prisma.courier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .OrderDelivery(args);
  }

  async getAddress(parentId: string): Promise<PostalAddress | null> {
    return this.prisma.courier
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getVehicle(parentId: string): Promise<Vehicle | null> {
    return this.prisma.courier
      .findUnique({
        where: { id: parentId },
      })
      .vehicle();
  }

  async getBazaar(parentId: string): Promise<Bazaar | null> {
    return this.prisma.courier
      .findUnique({
        where: { id: parentId },
      })
      .bazaar();
  }
}
