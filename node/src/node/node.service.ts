import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NodeServiceBase } from "./base/node.service.base";

@Injectable()
export class NodeService extends NodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
