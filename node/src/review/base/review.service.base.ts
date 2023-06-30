import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Review,
  LocalBusiness,
  Customer,
  Image,
  Courier,
  MenuItem,
} from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReviewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCountArgs>
  ): Promise<number> {
    return this.prisma.review.count(args);
  }

  async findMany<T extends Prisma.ReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>
  ): Promise<Review[]> {
    return this.prisma.review.findMany(args);
  }
  async findOne<T extends Prisma.ReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>
  ): Promise<Review | null> {
    return this.prisma.review.findUnique(args);
  }
  async create<T extends Prisma.ReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCreateArgs>
  ): Promise<Review> {
    return this.prisma.review.create<T>(args);
  }
  async update<T extends Prisma.ReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewUpdateArgs>
  ): Promise<Review> {
    return this.prisma.review.update<T>(args);
  }
  async delete<T extends Prisma.ReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewDeleteArgs>
  ): Promise<Review> {
    return this.prisma.review.delete(args);
  }

  async getLocalBusiness(parentId: string): Promise<LocalBusiness | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .LocalBusiness();
  }

  async getAuthor(parentId: string): Promise<Customer | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }

  async getImage(parentId: string): Promise<Image | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .image();
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .Courier();
  }

  async getMenuItem(parentId: string): Promise<MenuItem | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .MenuItem();
  }
}
