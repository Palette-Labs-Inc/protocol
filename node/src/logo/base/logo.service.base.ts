import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Logo, LocalBusiness } from "@prisma/client";

export class LogoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LogoCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoCountArgs>
  ): Promise<number> {
    return this.prisma.logo.count(args);
  }

  async findMany<T extends Prisma.LogoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoFindManyArgs>
  ): Promise<Logo[]> {
    return this.prisma.logo.findMany(args);
  }
  async findOne<T extends Prisma.LogoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoFindUniqueArgs>
  ): Promise<Logo | null> {
    return this.prisma.logo.findUnique(args);
  }
  async create<T extends Prisma.LogoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoCreateArgs>
  ): Promise<Logo> {
    return this.prisma.logo.create<T>(args);
  }
  async update<T extends Prisma.LogoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoUpdateArgs>
  ): Promise<Logo> {
    return this.prisma.logo.update<T>(args);
  }
  async delete<T extends Prisma.LogoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LogoDeleteArgs>
  ): Promise<Logo> {
    return this.prisma.logo.delete(args);
  }

  async findLocalBusiness(
    parentId: string,
    args: Prisma.LocalBusinessFindManyArgs
  ): Promise<LocalBusiness[]> {
    return this.prisma.logo
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .LocalBusiness(args);
  }
}
