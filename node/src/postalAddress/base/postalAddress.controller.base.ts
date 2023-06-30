import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PostalAddressService } from "../postalAddress.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PostalAddressCreateInput } from "./PostalAddressCreateInput";
import { PostalAddressWhereInput } from "./PostalAddressWhereInput";
import { PostalAddressWhereUniqueInput } from "./PostalAddressWhereUniqueInput";
import { PostalAddressFindManyArgs } from "./PostalAddressFindManyArgs";
import { PostalAddressUpdateInput } from "./PostalAddressUpdateInput";
import { PostalAddress } from "./PostalAddress";
import { Customer } from "../../customer/base/Customer";
import { LocalBusinessFindManyArgs } from "../../localBusiness/base/LocalBusinessFindManyArgs";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { NodeFindManyArgs } from "../../node/base/NodeFindManyArgs";
import { Node } from "../../node/base/Node";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PostalAddressControllerBase {
  constructor(
    protected readonly service: PostalAddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PostalAddress })
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PostalAddressCreateInput
  ): Promise<PostalAddress> {
    return await this.service.create({
      data: {
        ...data,

        Customer: data.Customer
          ? {
              connect: data.Customer,
            }
          : undefined,
      },
      select: {
        id: true,
        addressCountry: true,
        addressLocality: true,
        addressRegion: true,
        postOfficeBoxNumber: true,
        postalCode: true,
        streetAddress: true,

        Customer: {
          select: {
            id: true,
          },
        },

        defaultAddress: true,
        globalLocationNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PostalAddress] })
  @ApiNestedQuery(PostalAddressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PostalAddress[]> {
    const args = plainToClass(PostalAddressFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        addressCountry: true,
        addressLocality: true,
        addressRegion: true,
        postOfficeBoxNumber: true,
        postalCode: true,
        streetAddress: true,

        Customer: {
          select: {
            id: true,
          },
        },

        defaultAddress: true,
        globalLocationNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PostalAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PostalAddressWhereUniqueInput
  ): Promise<PostalAddress | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        addressCountry: true,
        addressLocality: true,
        addressRegion: true,
        postOfficeBoxNumber: true,
        postalCode: true,
        streetAddress: true,

        Customer: {
          select: {
            id: true,
          },
        },

        defaultAddress: true,
        globalLocationNumber: true,
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
  @swagger.ApiOkResponse({ type: PostalAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() data: PostalAddressUpdateInput
  ): Promise<PostalAddress | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Customer: data.Customer
            ? {
                connect: data.Customer,
              }
            : undefined,
        },
        select: {
          id: true,
          addressCountry: true,
          addressLocality: true,
          addressRegion: true,
          postOfficeBoxNumber: true,
          postalCode: true,
          streetAddress: true,

          Customer: {
            select: {
              id: true,
            },
          },

          defaultAddress: true,
          globalLocationNumber: true,
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
  @swagger.ApiOkResponse({ type: PostalAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PostalAddressWhereUniqueInput
  ): Promise<PostalAddress | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          addressCountry: true,
          addressLocality: true,
          addressRegion: true,
          postOfficeBoxNumber: true,
          postalCode: true,
          streetAddress: true,

          Customer: {
            select: {
              id: true,
            },
          },

          defaultAddress: true,
          globalLocationNumber: true,
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
  @common.Get("/:id/LocalBusiness")
  @ApiNestedQuery(LocalBusinessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "read",
    possession: "any",
  })
  async findManyLocalBusiness(
    @common.Req() request: Request,
    @common.Param() params: PostalAddressWhereUniqueInput
  ): Promise<LocalBusiness[]> {
    const query = plainToClass(LocalBusinessFindManyArgs, request.query);
    const results = await this.service.findLocalBusiness(params.id, {
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

  @common.Post("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async connectLocalBusiness(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async updateLocalBusiness(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async disconnectLocalBusiness(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
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
    @common.Param() params: PostalAddressWhereUniqueInput
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async connectCourier(
    @common.Param() params: PostalAddressWhereUniqueInput,
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async updateCourier(
    @common.Param() params: PostalAddressWhereUniqueInput,
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async disconnectCourier(
    @common.Param() params: PostalAddressWhereUniqueInput,
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
    @common.Param() params: PostalAddressWhereUniqueInput
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async connectOrder(
    @common.Param() params: PostalAddressWhereUniqueInput,
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @common.Param() params: PostalAddressWhereUniqueInput,
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
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async disconnectOrder(
    @common.Param() params: PostalAddressWhereUniqueInput,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/Node")
  @ApiNestedQuery(NodeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  async findManyNode(
    @common.Req() request: Request,
    @common.Param() params: PostalAddressWhereUniqueInput
  ): Promise<Node[]> {
    const query = plainToClass(NodeFindManyArgs, request.query);
    const results = await this.service.findNode(params.id, {
      ...query,
      select: {
        createdAt: true,
        hostUrl: true,
        id: true,
        industryCode: true,

        location: {
          select: {
            id: true,
          },
        },

        operatorType: true,
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

  @common.Post("/:id/Node")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async connectNode(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: NodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Node: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Node")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async updateNode(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: NodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Node: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Node")
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "update",
    possession: "any",
  })
  async disconnectNode(
    @common.Param() params: PostalAddressWhereUniqueInput,
    @common.Body() body: NodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Node: {
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
