import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MenuSection, MenuItem, Menu } from "@prisma/client";

export class MenuSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuSectionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionCountArgs>
  ): Promise<number> {
    return this.prisma.menuSection.count(args);
  }

  async findMany<T extends Prisma.MenuSectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionFindManyArgs>
  ): Promise<MenuSection[]> {
    return this.prisma.menuSection.findMany(args);
  }
  async findOne<T extends Prisma.MenuSectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionFindUniqueArgs>
  ): Promise<MenuSection | null> {
    return this.prisma.menuSection.findUnique(args);
  }
  async create<T extends Prisma.MenuSectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionCreateArgs>
  ): Promise<MenuSection> {
    return this.prisma.menuSection.create<T>(args);
  }
  async update<T extends Prisma.MenuSectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionUpdateArgs>
  ): Promise<MenuSection> {
    return this.prisma.menuSection.update<T>(args);
  }
  async delete<T extends Prisma.MenuSectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuSectionDeleteArgs>
  ): Promise<MenuSection> {
    return this.prisma.menuSection.delete(args);
  }

  async findHasMenuItem(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.menuSection
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .hasMenuItem(args);
  }

  async getMenu(parentId: string): Promise<Menu | null> {
    return this.prisma.menuSection
      .findUnique({
        where: { id: parentId },
      })
      .Menu();
  }
}
