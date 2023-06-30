import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CancellationServiceBase } from "./base/cancellation.service.base";

@Injectable()
export class CancellationService extends CancellationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
