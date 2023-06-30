import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PostalAddress,
  LocalBusiness,
  Courier,
  Order,
  Node,
  Customer,
} from "@prisma/client";

export class PostalAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PostalAddressCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressCountArgs>
  ): Promise<number> {
    return this.prisma.postalAddress.count(args);
  }

  async findMany<T extends Prisma.PostalAddressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressFindManyArgs>
  ): Promise<PostalAddress[]> {
    return this.prisma.postalAddress.findMany(args);
  }
  async findOne<T extends Prisma.PostalAddressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressFindUniqueArgs>
  ): Promise<PostalAddress | null> {
    return this.prisma.postalAddress.findUnique(args);
  }
  async create<T extends Prisma.PostalAddressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressCreateArgs>
  ): Promise<PostalAddress> {
    return this.prisma.postalAddress.create<T>(args);
  }
  async update<T extends Prisma.PostalAddressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressUpdateArgs>
  ): Promise<PostalAddress> {
    return this.prisma.postalAddress.update<T>(args);
  }
  async delete<T extends Prisma.PostalAddressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostalAddressDeleteArgs>
  ): Promise<PostalAddress> {
    return this.prisma.postalAddress.delete(args);
  }

  async findLocalBusiness(
    parentId: string,
    args: Prisma.LocalBusinessFindManyArgs
  ): Promise<LocalBusiness[]> {
    return this.prisma.postalAddress
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .LocalBusiness(args);
  }

  async findCourier(
    parentId: string,
    args: Prisma.CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.prisma.postalAddress
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Courier(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.postalAddress
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Order(args);
  }

  async findNode(
    parentId: string,
    args: Prisma.NodeFindManyArgs
  ): Promise<Node[]> {
    return this.prisma.postalAddress
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .Node(args);
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.postalAddress
      .findUnique({
        where: { id: parentId },
      })
      .Customer();
  }
}
