import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LocalBusinessService } from "../localBusiness.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LocalBusinessCreateInput } from "./LocalBusinessCreateInput";
import { LocalBusinessWhereInput } from "./LocalBusinessWhereInput";
import { LocalBusinessWhereUniqueInput } from "./LocalBusinessWhereUniqueInput";
import { LocalBusinessFindManyArgs } from "./LocalBusinessFindManyArgs";
import { LocalBusinessUpdateInput } from "./LocalBusinessUpdateInput";
import { LocalBusiness } from "./LocalBusiness";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { OpeningHoursSpecficationFindManyArgs } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { OpeningHoursSpecfication } from "../../openingHoursSpecfication/base/OpeningHoursSpecfication";
import { OpeningHoursSpecficationWhereUniqueInput } from "../../openingHoursSpecfication/base/OpeningHoursSpecficationWhereUniqueInput";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Support } from "../../support/base/Support";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PaymentTermFindManyArgs } from "../../paymentTerm/base/PaymentTermFindManyArgs";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LocalBusinessControllerBase {
  constructor(
    protected readonly service: LocalBusinessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LocalBusiness })
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: LocalBusinessCreateInput
  ): Promise<LocalBusiness> {
    return await this.service.create({
      data: {
        ...data,

        aggregateRating: {
          connect: data.aggregateRating,
        },

        logo: {
          connect: data.logo,
        },

        address: {
          connect: data.address,
        },

        parentOrganization: {
          connect: data.parentOrganization,
        },

        Bazaar: data.Bazaar
          ? {
              connect: data.Bazaar,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LocalBusiness] })
  @ApiNestedQuery(LocalBusinessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<LocalBusiness[]> {
    const args = plainToClass(LocalBusinessFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LocalBusiness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<LocalBusiness | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LocalBusiness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() data: LocalBusinessUpdateInput
  ): Promise<LocalBusiness | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          aggregateRating: {
            connect: data.aggregateRating,
          },

          logo: {
            connect: data.logo,
          },

          address: {
            connect: data.address,
          },

          parentOrganization: {
            connect: data.parentOrganization,
          },

          Bazaar: data.Bazaar
            ? {
                connect: data.Bazaar,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: LocalBusiness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<LocalBusiness | null> {
    try {
      return await this.service.delete({
        where: params,
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
    @common.Param() params: LocalBusinessWhereUniqueInput
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectReview(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectReview(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
  @common.Get("/:id/openingHoursSpecification")
  @ApiNestedQuery(OpeningHoursSpecficationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "read",
    possession: "any",
  })
  async findManyOpeningHoursSpecification(
    @common.Req() request: Request,
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<OpeningHoursSpecfication[]> {
    const query = plainToClass(
      OpeningHoursSpecficationFindManyArgs,
      request.query
    );
    const results = await this.service.findOpeningHoursSpecification(
      params.id,
      {
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
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/openingHoursSpecification")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectOpeningHoursSpecification(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHoursSpecification: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/openingHoursSpecification")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updateOpeningHoursSpecification(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHoursSpecification: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/openingHoursSpecification")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectOpeningHoursSpecification(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: OpeningHoursSpecficationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      openingHoursSpecification: {
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
  @common.Get("/:id/photo")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyPhoto(
    @common.Req() request: Request,
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findPhoto(params.id, {
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

  @common.Post("/:id/photo")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectPhoto(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photo: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/photo")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updatePhoto(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photo: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/photo")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectPhoto(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photo: {
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
    @common.Param() params: LocalBusinessWhereUniqueInput
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectOrder(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectOrder(
    @common.Param() params: LocalBusinessWhereUniqueInput,
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
  @common.Get("/:id/PaymentTerm")
  @ApiNestedQuery(PaymentTermFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async findManyPaymentTerm(
    @common.Req() request: Request,
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<PaymentTerm[]> {
    const query = plainToClass(PaymentTermFindManyArgs, request.query);
    const results = await this.service.findPaymentTerm(params.id, {
      ...query,
      select: {
        order: {
          select: {
            id: true,
          },
        },

        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        lifecycleProcessing: true,
        orderPrice: true,
        tip: true,
        servicePrice: true,
        paymentCurrency: true,
        commissionCharged: true,
        paymentMethod: true,
        status: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/PaymentTerm")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectPaymentTerm(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PaymentTerm: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/PaymentTerm")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updatePaymentTerm(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PaymentTerm: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/PaymentTerm")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectPaymentTerm(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PaymentTerm: {
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
  @common.Get("/:id/hasMenu")
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findManyHasMenu(
    @common.Req() request: Request,
    @common.Param() params: LocalBusinessWhereUniqueInput
  ): Promise<Menu[]> {
    const query = plainToClass(MenuFindManyArgs, request.query);
    const results = await this.service.findHasMenu(params.id, {
      ...query,
      select: {
        id: true,
        name: true,

        seller: {
          select: {
            id: true,
          },
        },

        description: true,
        createdAt: true,
        updatedAt: true,
        fulfillmentModes: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hasMenu")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async connectHasMenu(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenu: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hasMenu")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async updateHasMenu(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenu: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hasMenu")
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "update",
    possession: "any",
  })
  async disconnectHasMenu(
    @common.Param() params: LocalBusinessWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenu: {
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
