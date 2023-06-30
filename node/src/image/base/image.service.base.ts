import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Image,
  Review,
  LocalBusiness,
  MenuItem,
  Support,
} from "@prisma/client";

export class ImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ImageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageCountArgs>
  ): Promise<number> {
    return this.prisma.image.count(args);
  }

  async findMany<T extends Prisma.ImageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindManyArgs>
  ): Promise<Image[]> {
    return this.prisma.image.findMany(args);
  }
  async findOne<T extends Prisma.ImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>
  ): Promise<Image | null> {
    return this.prisma.image.findUnique(args);
  }
  async create<T extends Prisma.ImageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageCreateArgs>
  ): Promise<Image> {
    return this.prisma.image.create<T>(args);
  }
  async update<T extends Prisma.ImageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageUpdateArgs>
  ): Promise<Image> {
    return this.prisma.image.update<T>(args);
  }
  async delete<T extends Prisma.ImageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageDeleteArgs>
  ): Promise<Image> {
    return this.prisma.image.delete(args);
  }

  async findReview(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.image
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Review(args);
  }

  async getLocalBusiness(parentId: string): Promise<LocalBusiness | null> {
    return this.prisma.image
      .findUnique({
        where: { id: parentId },
      })
      .LocalBusiness();
  }

  async getMenuItem(parentId: string): Promise<MenuItem | null> {
    return this.prisma.image
      .findUnique({
        where: { id: parentId },
      })
      .MenuItem();
  }

  async getSupport(parentId: string): Promise<Support | null> {
    return this.prisma.image
      .findUnique({
        where: { id: parentId },
      })
      .Support();
  }
}
