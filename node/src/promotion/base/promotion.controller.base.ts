import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PromotionService } from "../promotion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PromotionCreateInput } from "./PromotionCreateInput";
import { PromotionWhereInput } from "./PromotionWhereInput";
import { PromotionWhereUniqueInput } from "./PromotionWhereUniqueInput";
import { PromotionFindManyArgs } from "./PromotionFindManyArgs";
import { PromotionUpdateInput } from "./PromotionUpdateInput";
import { Promotion } from "./Promotion";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { OpeningHoursSpecficationFindManyArgs } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { OpeningHoursSpecfication } from "../../openingHoursSpecfication/base/OpeningHoursSpecfication";
import { OpeningHoursSpecficationWhereUniqueInput } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PromotionControllerBase {
  constructor(
    protected readonly service: PromotionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Promotion })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PromotionCreateInput): Promise<Promotion> {
    return await this.service.create({
      data: {
        ...data,

        Bazaar: data.Bazaar
          ? {
              connect: data.Bazaar,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Promotion] })
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Promotion[]> {
    const args = plainToClass(PromotionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() data: PromotionUpdateInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Bazaar: data.Bazaar
            ? {
                connect: data.Bazaar,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Promotion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Promotion | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/openingHours")
  @ApiNestedQuery(OpeningHoursSpecficationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "read",
    possession: "any",
  })
  async findManyOpeningHours(
    @common.Req() request: Request,
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<OpeningHoursSpecfication[]> {
    const query = plainToClass(
      OpeningHoursSpecficationFindManyArgs,
      request.query
    );
    const results = await this.service.findOpeningHours(params.id, {
      ...query,
      select: {
        id: true,
        dayOfWeek: true,
        opens: true,
        closes: true,
        validFrom: true,
        validThrough: true,

        Promotion: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,

        LocalBusiness: {
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

  @common.Post("/:id/openingHours")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async connectOpeningHours(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHours: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/openingHours")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async updateOpeningHours(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHours: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/openingHours")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async disconnectOpeningHours(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHours: {
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
  @common.Get("/:id/Order")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrder(
    @common.Req() request: Request,
    @common.Param() params: PromotionWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrder(params.id, {
      ...query,
      select: {
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        orderStatus: true,

        orderDelivery: {
          select: {
            id: true,
          },
        },

        orderDate: true,
        orderETA: true,
        orderReadyTime: true,
        courierArriedTime: true,
        orderPickedupTime: true,
        orderCompleteDate: true,

        customer: {
          select: {
            id: true,
          },
        },

        discount: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

        confirmationNumber: true,

        deliveryAddress: {
          select: {
            id: true,
          },
        },

        referenceOrderId: true,
        updatedAt: true,
        updatedBy: true,
        type: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Order")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async connectOrder(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Order: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Order")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Order: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Order")
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "update",
    possession: "any",
  })
  async disconnectOrder(
    @common.Param() params: PromotionWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Order: {
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
