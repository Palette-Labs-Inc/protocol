import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderService } from "../order.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderCreateInput } from "./OrderCreateInput";
import { OrderWhereInput } from "./OrderWhereInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { Order } from "./Order";
import { OrderItemFindManyArgs } from "../../orderItem/base/OrderItemFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";
import { CancellationFindManyArgs } from "../../cancellation/base/CancellationFindManyArgs";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { CancellationWhereUniqueInput } from "../../cancellation/base/CancellationWhereUniqueInput";
import { SupportFindManyArgs } from "../../support/base/SupportFindManyArgs";
import { Support } from "../../support/base/Support";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.create({
      data: {
        ...data,

        seller: {
          connect: data.seller,
        },

        orderDelivery: {
          connect: data.orderDelivery,
        },

        customer: {
          connect: data.customer,
        },

        discount: {
          connect: data.discount,
        },

        paymentTerm: {
          connect: data.paymentTerm,
        },

        deliveryAddress: {
          connect: data.deliveryAddress,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          seller: {
            connect: data.seller,
          },

          orderDelivery: {
            connect: data.orderDelivery,
          },

          customer: {
            connect: data.customer,
          },

          discount: {
            connect: data.discount,
          },

          paymentTerm: {
            connect: data.paymentTerm,
          },

          deliveryAddress: {
            connect: data.deliveryAddress,
          },
        },
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
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/orderedItem")
  @ApiNestedQuery(OrderItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async findManyOrderedItem(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<OrderItem[]> {
    const query = plainToClass(OrderItemFindManyArgs, request.query);
    const results = await this.service.findOrderedItem(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderedItem")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectOrderedItem(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderedItem: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderedItem")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrderedItem(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderedItem: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderedItem")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectOrderedItem(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderedItem: {
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
  @common.Get("/:id/Cancellation")
  @ApiNestedQuery(CancellationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "any",
  })
  async findManyCancellation(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Cancellation[]> {
    const query = plainToClass(CancellationFindManyArgs, request.query);
    const results = await this.service.findCancellation(params.id, {
      ...query,
      select: {
        id: true,

        orderNumber: {
          select: {
            id: true,
          },
        },

        cancelledBy: true,
        createdAt: true,
        isReasonRequired: true,
        reason: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Cancellation")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectCancellation(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: CancellationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Cancellation: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Cancellation")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateCancellation(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: CancellationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Cancellation: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Cancellation")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectCancellation(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: CancellationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Cancellation: {
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
  @common.Get("/:id/Support")
  @ApiNestedQuery(SupportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async findManySupport(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Support[]> {
    const query = plainToClass(SupportFindManyArgs, request.query);
    const results = await this.service.findSupport(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        orderNumber: {
          select: {
            id: true,
          },
        },

        status: true,
        detail: true,
        action: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/Support")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectSupport(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: SupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Support: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Support")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateSupport(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: SupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Support: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Support")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectSupport(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: SupportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Support: {
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
  @common.Get("/:id/Messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findManyMessages(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        id: true,
        sendAt: true,
        senderId: true,
        recipentId: true,
        message: true,

        relatedOrder: {
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

  @common.Post("/:id/Messages")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Messages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Messages")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Messages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Messages")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Messages: {
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
