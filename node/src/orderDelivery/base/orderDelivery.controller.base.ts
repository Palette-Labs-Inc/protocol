import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderDeliveryService } from "../orderDelivery.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderDeliveryCreateInput } from "./OrderDeliveryCreateInput";
import { OrderDeliveryWhereInput } from "./OrderDeliveryWhereInput";
import { OrderDeliveryWhereUniqueInput } from "./OrderDeliveryWhereUniqueInput";
import { OrderDeliveryFindManyArgs } from "./OrderDeliveryFindManyArgs";
import { OrderDeliveryUpdateInput } from "./OrderDeliveryUpdateInput";
import { OrderDelivery } from "./OrderDelivery";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderDeliveryControllerBase {
  constructor(
    protected readonly service: OrderDeliveryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderDelivery })
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: OrderDeliveryCreateInput
  ): Promise<OrderDelivery> {
    return await this.service.create({
      data: {
        ...data,

        courier: {
          connect: data.courier,
        },
      },
      select: {
        id: true,

        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderDelivery] })
  @ApiNestedQuery(OrderDeliveryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<OrderDelivery[]> {
    const args = plainToClass(OrderDeliveryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,

        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderDeliveryWhereUniqueInput
  ): Promise<OrderDelivery | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,

        courier: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: OrderDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderDeliveryWhereUniqueInput,
    @common.Body() data: OrderDeliveryUpdateInput
  ): Promise<OrderDelivery | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          courier: {
            connect: data.courier,
          },
        },
        select: {
          id: true,

          courier: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: OrderDelivery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderDeliveryWhereUniqueInput
  ): Promise<OrderDelivery | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,

          courier: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/Order")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrder(
    @common.Req() request: Request,
    @common.Param() params: OrderDeliveryWhereUniqueInput
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
    resource: "OrderDelivery",
    action: "update",
    possession: "any",
  })
  async connectOrder(
    @common.Param() params: OrderDeliveryWhereUniqueInput,
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
    resource: "OrderDelivery",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @common.Param() params: OrderDeliveryWhereUniqueInput,
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
    resource: "OrderDelivery",
    action: "update",
    possession: "any",
  })
  async disconnectOrder(
    @common.Param() params: OrderDeliveryWhereUniqueInput,
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
