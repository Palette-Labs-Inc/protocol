import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Node, PostalAddress } from "@prisma/client";

export class NodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NodeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeCountArgs>
  ): Promise<number> {
    return this.prisma.node.count(args);
  }

  async findMany<T extends Prisma.NodeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeFindManyArgs>
  ): Promise<Node[]> {
    return this.prisma.node.findMany(args);
  }
  async findOne<T extends Prisma.NodeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeFindUniqueArgs>
  ): Promise<Node | null> {
    return this.prisma.node.findUnique(args);
  }
  async create<T extends Prisma.NodeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeCreateArgs>
  ): Promise<Node> {
    return this.prisma.node.create<T>(args);
  }
  async update<T extends Prisma.NodeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeUpdateArgs>
  ): Promise<Node> {
    return this.prisma.node.update<T>(args);
  }
  async delete<T extends Prisma.NodeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NodeDeleteArgs>
  ): Promise<Node> {
    return this.prisma.node.delete(args);
  }

  async getLocation(parentId: string): Promise<PostalAddress | null> {
    return this.prisma.node
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
