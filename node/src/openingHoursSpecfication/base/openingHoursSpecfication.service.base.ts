import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  OpeningHoursSpecfication,
  Promotion,
  LocalBusiness,
} from "@prisma/client";

export class OpeningHoursSpecficationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OpeningHoursSpecficationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationCountArgs>
  ): Promise<number> {
    return this.prisma.openingHoursSpecfication.count(args);
  }

  async findMany<T extends Prisma.OpeningHoursSpecficationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationFindManyArgs>
  ): Promise<OpeningHoursSpecfication[]> {
    return this.prisma.openingHoursSpecfication.findMany(args);
  }
  async findOne<T extends Prisma.OpeningHoursSpecficationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationFindUniqueArgs>
  ): Promise<OpeningHoursSpecfication | null> {
    return this.prisma.openingHoursSpecfication.findUnique(args);
  }
  async create<T extends Prisma.OpeningHoursSpecficationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationCreateArgs>
  ): Promise<OpeningHoursSpecfication> {
    return this.prisma.openingHoursSpecfication.create<T>(args);
  }
  async update<T extends Prisma.OpeningHoursSpecficationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationUpdateArgs>
  ): Promise<OpeningHoursSpecfication> {
    return this.prisma.openingHoursSpecfication.update<T>(args);
  }
  async delete<T extends Prisma.OpeningHoursSpecficationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpeningHoursSpecficationDeleteArgs>
  ): Promise<OpeningHoursSpecfication> {
    return this.prisma.openingHoursSpecfication.delete(args);
  }

  async getPromotion(parentId: string): Promise<Promotion | null> {
    return this.prisma.openingHoursSpecfication
      .findUnique({
        where: { id: parentId },
      })
      .Promotion();
  }

  async getLocalBusiness(parentId: string): Promise<LocalBusiness | null> {
    return this.prisma.openingHoursSpecfication
      .findUnique({
        where: { id: parentId },
      })
      .LocalBusiness();
  }
}
