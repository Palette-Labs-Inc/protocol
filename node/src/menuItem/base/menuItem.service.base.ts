import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MenuItem,
  Review,
  Image,
  OrderItem,
  Menu,
  NutritionInformation,
  MenuSection,
} from "@prisma/client";

export class MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuItemCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCountArgs>
  ): Promise<number> {
    return this.prisma.menuItem.count(args);
  }

  async findMany<T extends Prisma.MenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>
  ): Promise<MenuItem[]> {
    return this.prisma.menuItem.findMany(args);
  }
  async findOne<T extends Prisma.MenuItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>
  ): Promise<MenuItem | null> {
    return this.prisma.menuItem.findUnique(args);
  }
  async create<T extends Prisma.MenuItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCreateArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.create<T>(args);
  }
  async update<T extends Prisma.MenuItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemUpdateArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.update<T>(args);
  }
  async delete<T extends Prisma.MenuItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemDeleteArgs>
  ): Promise<MenuItem> {
    return this.prisma.menuItem.delete(args);
  }

  async findReview(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .review(args);
  }

  async findImage(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .image(args);
  }

  async findOrderItem(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.prisma.menuItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .OrderItem(args);
  }

  async getMenu(parentId: string): Promise<Menu | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .Menu();
  }

  async getNutrition(parentId: string): Promise<NutritionInformation | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .nutrition();
  }

  async getMenuSection(parentId: string): Promise<MenuSection | null> {
    return this.prisma.menuItem
      .findUnique({
        where: { id: parentId },
      })
      .MenuSection();
  }
}
