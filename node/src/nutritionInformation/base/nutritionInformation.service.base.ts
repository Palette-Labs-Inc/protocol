import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, NutritionInformation, MenuItem } from "@prisma/client";

export class NutritionInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NutritionInformationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationCountArgs>
  ): Promise<number> {
    return this.prisma.nutritionInformation.count(args);
  }

  async findMany<T extends Prisma.NutritionInformationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationFindManyArgs>
  ): Promise<NutritionInformation[]> {
    return this.prisma.nutritionInformation.findMany(args);
  }
  async findOne<T extends Prisma.NutritionInformationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationFindUniqueArgs>
  ): Promise<NutritionInformation | null> {
    return this.prisma.nutritionInformation.findUnique(args);
  }
  async create<T extends Prisma.NutritionInformationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationCreateArgs>
  ): Promise<NutritionInformation> {
    return this.prisma.nutritionInformation.create<T>(args);
  }
  async update<T extends Prisma.NutritionInformationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationUpdateArgs>
  ): Promise<NutritionInformation> {
    return this.prisma.nutritionInformation.update<T>(args);
  }
  async delete<T extends Prisma.NutritionInformationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NutritionInformationDeleteArgs>
  ): Promise<NutritionInformation> {
    return this.prisma.nutritionInformation.delete(args);
  }

  async findMenuItem(
    parentId: string,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.nutritionInformation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .MenuItem(args);
  }
}
