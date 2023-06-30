import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostalAddressServiceBase } from "./base/postalAddress.service.base";

@Injectable()
export class PostalAddressService extends PostalAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
