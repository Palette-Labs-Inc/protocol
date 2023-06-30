import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BazaarService } from "../bazaar.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BazaarCreateInput } from "./BazaarCreateInput";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { BazaarWhereUniqueInput } from "./BazaarWhereUniqueInput";
import { BazaarFindManyArgs } from "./BazaarFindManyArgs";
import { BazaarUpdateInput } from "./BazaarUpdateInput";
import { Bazaar } from "./Bazaar";
import { LocalBusinessFindManyArgs } from "../../localBusiness/base/LocalBusinessFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BazaarControllerBase {
  constructor(
    protected readonly service: BazaarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bazaar })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: BazaarCreateInput): Promise<Bazaar> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        fulfillmentModes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bazaar] })
  @ApiNestedQuery(BazaarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Bazaar[]> {
    const args = plainToClass(BazaarFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        fulfillmentModes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Bazaar | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        fulfillmentModes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() data: BazaarUpdateInput
  ): Promise<Bazaar | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          fulfillmentModes: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bazaar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Bazaar | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          fulfillmentModes: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/localBusinesses")
  @ApiNestedQuery(LocalBusinessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "read",
    possession: "any",
  })
  async findManyLocalBusinesses(
    @common.Req() request: Request,
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<LocalBusiness[]> {
    const query = plainToClass(LocalBusinessFindManyArgs, request.query);
    const results = await this.service.findLocalBusinesses(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        description: true,
        url: true,
        telephone: true,
        servesCuisine: true,

        aggregateRating: {
          select: {
            id: true,
          },
        },

        logo: {
          select: {
            id: true,
          },
        },

        openingHours: true,
        longitude: true,
        latitude: true,
        globalLocationNumber: true,
        faxNumber: true,

        address: {
          select: {
            id: true,
          },
        },

        paymentAccepted: true,
        priceRange: true,
        email: true,
        foundingDate: true,
        createdAt: true,
        updatedAt: true,
        hasPOS: true,
        pos: true,
        branchCode: true,

        parentOrganization: {
          select: {
            id: true,
          },
        },

        category: true,

        Bazaar: {
          select: {
            id: true,
          },
        },

        commission: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/localBusinesses")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async connectLocalBusinesses(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localBusinesses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/localBusinesses")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updateLocalBusinesses(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localBusinesses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/localBusinesses")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async disconnectLocalBusinesses(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localBusinesses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/promotions")
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async findManyPromotions(
    @common.Req() request: Request,
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotions(params.id, {
      ...query,
      select: {
        id: true,

        Bazaar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        content: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async connectPromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updatePromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotions")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async disconnectPromotions(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/Courier")
  @ApiNestedQuery(CourierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async findManyCourier(
    @common.Req() request: Request,
    @common.Param() params: BazaarWhereUniqueInput
  ): Promise<Courier[]> {
    const query = plainToClass(CourierFindManyArgs, request.query);
    const results = await this.service.findCourier(params.id, {
      ...query,
      select: {
        id: true,
        givenName: true,
        familyName: true,
        birthDate: true,
        telephone: true,

        address: {
          select: {
            id: true,
          },
        },

        email: true,
        gender: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        rating: true,

        bazaar: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async connectCourier(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async updateCourier(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "update",
    possession: "any",
  })
  async disconnectCourier(
    @common.Param() params: BazaarWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
