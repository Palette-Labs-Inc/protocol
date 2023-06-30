import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Vehicle, Courier } from "@prisma/client";

export class VehicleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VehicleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleCountArgs>
  ): Promise<number> {
    return this.prisma.vehicle.count(args);
  }

  async findMany<T extends Prisma.VehicleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleFindManyArgs>
  ): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany(args);
  }
  async findOne<T extends Prisma.VehicleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleFindUniqueArgs>
  ): Promise<Vehicle | null> {
    return this.prisma.vehicle.findUnique(args);
  }
  async create<T extends Prisma.VehicleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleCreateArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.create<T>(args);
  }
  async update<T extends Prisma.VehicleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleUpdateArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.update<T>(args);
  }
  async delete<T extends Prisma.VehicleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleDeleteArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.delete(args);
  }

  async findCourier(
    parentId: string,
    args: Prisma.CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.prisma.vehicle
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Courier(args);
  }
}
