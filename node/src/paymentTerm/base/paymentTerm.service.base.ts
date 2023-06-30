import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PaymentTerm,
  Order,
  LocalBusiness,
  Customer,
} from "@prisma/client";

export class PaymentTermServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PaymentTermCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermCountArgs>
  ): Promise<number> {
    return this.prisma.paymentTerm.count(args);
  }

  async findMany<T extends Prisma.PaymentTermFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermFindManyArgs>
  ): Promise<PaymentTerm[]> {
    return this.prisma.paymentTerm.findMany(args);
  }
  async findOne<T extends Prisma.PaymentTermFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermFindUniqueArgs>
  ): Promise<PaymentTerm | null> {
    return this.prisma.paymentTerm.findUnique(args);
  }
  async create<T extends Prisma.PaymentTermCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermCreateArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.create<T>(args);
  }
  async update<T extends Prisma.PaymentTermUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermUpdateArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.update<T>(args);
  }
  async delete<T extends Prisma.PaymentTermDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentTermDeleteArgs>
  ): Promise<PaymentTerm> {
    return this.prisma.paymentTerm.delete(args);
  }

  async getOrder(parentId: string): Promise<Order | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }

  async getSeller(parentId: string): Promise<LocalBusiness | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .seller();
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
