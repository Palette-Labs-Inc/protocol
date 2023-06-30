import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CustomerService } from "../customer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { Customer } from "./Customer";
import { AggregateRatingFindManyArgs } from "../../aggregateRating/base/AggregateRatingFindManyArgs";
import { AggregateRating } from "../../aggregateRating/base/AggregateRating";
import { AggregateRatingWhereUniqueInput } from "../../aggregateRating/base/AggregateRatingWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Courier } from "../../courier/base/Courier";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { PostalAddressFindManyArgs } from "../../postalAddress/base/PostalAddressFindManyArgs";
import { PostalAddress } from "../../postalAddress/base/PostalAddress";
import { PostalAddressWhereUniqueInput } from "../../postalAddress/base/PostalAddressWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PaymentTermFindManyArgs } from "../../paymentTerm/base/PaymentTermFindManyArgs";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { SupportFindManyArgs } from "../../support/base/SupportFindManyArgs";
import { Support } from "../../support/base/Support";
import { SupportWhereUniqueInput } from "../../support/base/SupportWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CustomerCreateInput): Promise<Customer> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        familyName: true,
        givenName: true,
        birthDate: true,
        telephone: true,
        email: true,
        gender: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        familyName: true,
        givenName: true,
        birthDate: true,
        telephone: true,
        email: true,
        gender: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        familyName: true,
        givenName: true,
        birthDate: true,
        telephone: true,
        email: true,
        gender: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          familyName: true,
          givenName: true,
          birthDate: true,
          telephone: true,
          email: true,
          gender: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          familyName: true,
          givenName: true,
          birthDate: true,
          telephone: true,
          email: true,
          gender: true,
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
  @common.Get("/:id/AggregateRating")
  @ApiNestedQuery(AggregateRatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "read",
    possession: "any",
  })
  async findManyAggregateRating(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<AggregateRating[]> {
    const query = plainToClass(AggregateRatingFindManyArgs, request.query);
    const results = await this.service.findAggregateRating(params.id, {
      ...query,
      select: {
        id: true,
        ratingCount: true,
        reviewCount: true,
        itemReviewed: true,

        author: {
          select: {
            id: true,
          },
        },

        bestRating: true,
        ratingExplanation: true,
        ratingValue: true,
        worstRating: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/AggregateRating")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectAggregateRating(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AggregateRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      AggregateRating: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/AggregateRating")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateAggregateRating(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AggregateRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      AggregateRating: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/AggregateRating")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectAggregateRating(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: AggregateRatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      AggregateRating: {
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
  @common.Get("/:id/Review")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findManyReview(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
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

  @common.Post("/:id/Review")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectReview(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Review: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Review")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Review: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Review")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectReview(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Review: {
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
  @common.Get("/:id/address")
  @ApiNestedQuery(PostalAddressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PostalAddress",
    action: "read",
    possession: "any",
  })
  async findManyAddress(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<PostalAddress[]> {
    const query = plainToClass(PostalAddressFindManyArgs, request.query);
    const results = await this.service.findAddress(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/address")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectAddress(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: PostalAddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      address: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/address")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateAddress(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: PostalAddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      address: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/address")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectAddress(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: PostalAddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      address: {
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
    @common.Param() params: CustomerWhereUniqueInput
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectOrder(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectOrder(
    @common.Param() params: CustomerWhereUniqueInput,
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
    @common.Param() params: CustomerWhereUniqueInput
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectPaymentTerm(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updatePaymentTerm(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectPaymentTerm(
    @common.Param() params: CustomerWhereUniqueInput,
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
  @common.Get("/:id/Support")
  @ApiNestedQuery(SupportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async findManySupport(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectSupport(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateSupport(
    @common.Param() params: CustomerWhereUniqueInput,
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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectSupport(
    @common.Param() params: CustomerWhereUniqueInput,
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
}
