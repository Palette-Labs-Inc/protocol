import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BazaarServiceBase } from "./base/bazaar.service.base";

@Injectable()
export class BazaarService extends BazaarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
