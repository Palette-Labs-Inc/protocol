import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuItemService } from "../menuItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuItemCreateInput } from "./MenuItemCreateInput";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { MenuItemFindManyArgs } from "./MenuItemFindManyArgs";
import { MenuItemUpdateInput } from "./MenuItemUpdateInput";
import { MenuItem } from "./MenuItem";
import { Menu } from "../../menu/base/Menu";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Courier } from "../../courier/base/Courier";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Support } from "../../support/base/Support";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { OrderItemFindManyArgs } from "../../orderItem/base/OrderItemFindManyArgs";
import { Order } from "../../order/base/Order";
import { Quote } from "../../quote/base/Quote";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuItemControllerBase {
  constructor(
    protected readonly service: MenuItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuItem })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MenuItemCreateInput): Promise<MenuItem> {
    return await this.service.create({
      data: {
        ...data,

        Menu: data.Menu
          ? {
              connect: data.Menu,
            }
          : undefined,

        nutrition: {
          connect: data.nutrition,
        },

        MenuSection: data.MenuSection
          ? {
              connect: data.MenuSection,
            }
          : undefined,
      },
      select: {
        id: true,

        Menu: {
          select: {
            id: true,
          },
        },

        name: true,

        nutrition: {
          select: {
            id: true,
          },
        },

        description: true,
        price: true,
        priceCurrency: true,
        quantity: true,
        maximumPurchasableCount: true,
        minimumPurchasableCount: true,
        itemStatus: true,
        fulfillmentMode: true,
        createAt: true,
        updatedAt: true,

        MenuSection: {
          select: {
            id: true,
          },
        },

        suitableForDiet: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuItem] })
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MenuItem[]> {
    const args = plainToClass(MenuItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,

        Menu: {
          select: {
            id: true,
          },
        },

        name: true,

        nutrition: {
          select: {
            id: true,
          },
        },

        description: true,
        price: true,
        priceCurrency: true,
        quantity: true,
        maximumPurchasableCount: true,
        minimumPurchasableCount: true,
        itemStatus: true,
        fulfillmentMode: true,
        createAt: true,
        updatedAt: true,

        MenuSection: {
          select: {
            id: true,
          },
        },

        suitableForDiet: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,

        Menu: {
          select: {
            id: true,
          },
        },

        name: true,

        nutrition: {
          select: {
            id: true,
          },
        },

        description: true,
        price: true,
        priceCurrency: true,
        quantity: true,
        maximumPurchasableCount: true,
        minimumPurchasableCount: true,
        itemStatus: true,
        fulfillmentMode: true,
        createAt: true,
        updatedAt: true,

        MenuSection: {
          select: {
            id: true,
          },
        },

        suitableForDiet: true,
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
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() data: MenuItemUpdateInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Menu: data.Menu
            ? {
                connect: data.Menu,
              }
            : undefined,

          nutrition: {
            connect: data.nutrition,
          },

          MenuSection: data.MenuSection
            ? {
                connect: data.MenuSection,
              }
            : undefined,
        },
        select: {
          id: true,

          Menu: {
            select: {
              id: true,
            },
          },

          name: true,

          nutrition: {
            select: {
              id: true,
            },
          },

          description: true,
          price: true,
          priceCurrency: true,
          quantity: true,
          maximumPurchasableCount: true,
          minimumPurchasableCount: true,
          itemStatus: true,
          fulfillmentMode: true,
          createAt: true,
          updatedAt: true,

          MenuSection: {
            select: {
              id: true,
            },
          },

          suitableForDiet: true,
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
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,

          Menu: {
            select: {
              id: true,
            },
          },

          name: true,

          nutrition: {
            select: {
              id: true,
            },
          },

          description: true,
          price: true,
          priceCurrency: true,
          quantity: true,
          maximumPurchasableCount: true,
          minimumPurchasableCount: true,
          itemStatus: true,
          fulfillmentMode: true,
          createAt: true,
          updatedAt: true,

          MenuSection: {
            select: {
              id: true,
            },
          },

          suitableForDiet: true,
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
  @common.Get("/:id/review")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findManyReview(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReview(params.id, {
      ...query,
      select: {
        id: true,

        LocalBusiness: {
          select: {
            id: true,
          },
        },

        reviewBody: true,
        reviewRating: true,

        author: {
          select: {
            id: true,
          },
        },

        dateCreated: true,
        dateModified: true,

        image: {
          select: {
            id: true,
          },
        },

        Courier: {
          select: {
            id: true,
          },
        },

        MenuItem: {
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

  @common.Post("/:id/review")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectReview(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      review: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/review")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      review: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/review")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectReview(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      review: {
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
  @common.Get("/:id/image")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyImage(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImage(params.id, {
      ...query,
      select: {
        id: true,

        LocalBusiness: {
          select: {
            id: true,
          },
        },

        url: true,

        MenuItem: {
          select: {
            id: true,
          },
        },

        Support: {
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

  @common.Post("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectImage(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateImage(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectImage(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
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
  @common.Get("/:id/OrderItem")
  @ApiNestedQuery(OrderItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async findManyOrderItem(
    @common.Req() request: Request,
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<OrderItem[]> {
    const query = plainToClass(OrderItemFindManyArgs, request.query);
    const results = await this.service.findOrderItem(params.id, {
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

  @common.Post("/:id/OrderItem")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async connectOrderItem(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderItem: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/OrderItem")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItem(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderItem: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/OrderItem")
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async disconnectOrderItem(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderItem: {
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
