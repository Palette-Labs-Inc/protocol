import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CourierService } from "../courier.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourierCreateInput } from "./CourierCreateInput";
import { CourierWhereInput } from "./CourierWhereInput";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { CourierFindManyArgs } from "./CourierFindManyArgs";
import { CourierUpdateInput } from "./CourierUpdateInput";
import { Courier } from "./Courier";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { OrderDeliveryFindManyArgs } from "../../orderDelivery/base/OrderDeliveryFindManyArgs";
import { OrderDelivery } from "../../orderDelivery/base/OrderDelivery";
import { OrderDeliveryWhereUniqueInput } from "../../orderDelivery/base/OrderDeliveryWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourierControllerBase {
  constructor(
    protected readonly service: CourierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Courier })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CourierCreateInput): Promise<Courier> {
    return await this.service.create({
      data: {
        ...data,

        address: {
          connect: data.address,
        },

        vehicle: {
          connect: data.vehicle,
        },

        bazaar: {
          connect: data.bazaar,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Courier] })
  @ApiNestedQuery(CourierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Courier[]> {
    const args = plainToClass(CourierFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() data: CourierUpdateInput
  ): Promise<Courier | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          address: {
            connect: data.address,
          },

          vehicle: {
            connect: data.vehicle,
          },

          bazaar: {
            connect: data.bazaar,
          },
        },
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
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    try {
      return await this.service.delete({
        where: params,
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
    @common.Param() params: CourierWhereUniqueInput
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async connectReview(
    @common.Param() params: CourierWhereUniqueInput,
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @common.Param() params: CourierWhereUniqueInput,
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async disconnectReview(
    @common.Param() params: CourierWhereUniqueInput,
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
  @common.Get("/:id/OrderDelivery")
  @ApiNestedQuery(OrderDeliveryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderDelivery",
    action: "read",
    possession: "any",
  })
  async findManyOrderDelivery(
    @common.Req() request: Request,
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<OrderDelivery[]> {
    const query = plainToClass(OrderDeliveryFindManyArgs, request.query);
    const results = await this.service.findOrderDelivery(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/OrderDelivery")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async connectOrderDelivery(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrderDeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderDelivery: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/OrderDelivery")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateOrderDelivery(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrderDeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderDelivery: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/OrderDelivery")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async disconnectOrderDelivery(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrderDeliveryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      OrderDelivery: {
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
