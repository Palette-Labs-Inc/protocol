import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalBusinessServiceBase } from "./base/localBusiness.service.base";

@Injectable()
export class LocalBusinessService extends LocalBusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
