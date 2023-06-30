import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderItemService } from "../orderItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderItemCreateInput } from "./OrderItemCreateInput";
import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";
import { OrderItem } from "./OrderItem";
import { Order } from "../../order/base/Order";
import { Quote } from "../../quote/base/Quote";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderItemControllerBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderItem })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: OrderItemCreateInput): Promise<OrderItem> {
    return await this.service.create({
      data: {
        ...data,

        Order: data.Order
          ? {
              connect: data.Order,
            }
          : undefined,

        orderedItem: {
          connect: data.orderedItem,
        },

        Quote: data.Quote
          ? {
              connect: data.Quote,
            }
          : undefined,
      },
      select: {
        id: true,

        Order: {
          select: {
            id: true,
          },
        },

        orderedItem: {
          select: {
            id: true,
          },
        },

        orderQuantity: true,
        orderItemStatus: true,

        Quote: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderItem] })
  @ApiNestedQuery(OrderItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<OrderItem[]> {
    const args = plainToClass(OrderItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,

        Order: {
          select: {
            id: true,
          },
        },

        orderedItem: {
          select: {
            id: true,
          },
        },

        orderQuantity: true,
        orderItemStatus: true,

        Quote: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,

        Order: {
          select: {
            id: true,
          },
        },

        orderedItem: {
          select: {
            id: true,
          },
        },

        orderQuantity: true,
        orderItemStatus: true,

        Quote: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() data: OrderItemUpdateInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Order: data.Order
            ? {
                connect: data.Order,
              }
            : undefined,

          orderedItem: {
            connect: data.orderedItem,
          },

          Quote: data.Quote
            ? {
                connect: data.Quote,
              }
            : undefined,
        },
        select: {
          id: true,

          Order: {
            select: {
              id: true,
            },
          },

          orderedItem: {
            select: {
              id: true,
            },
          },

          orderQuantity: true,
          orderItemStatus: true,

          Quote: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,

          Order: {
            select: {
              id: true,
            },
          },

          orderedItem: {
            select: {
              id: true,
            },
          },

          orderQuantity: true,
          orderItemStatus: true,

          Quote: {
            select: {
              id: true,
            },
          },
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
}
