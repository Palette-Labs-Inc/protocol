import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AggregateRatingService } from "../aggregateRating.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AggregateRatingCreateInput } from "./AggregateRatingCreateInput";
import { AggregateRatingWhereInput } from "./AggregateRatingWhereInput";
import { AggregateRatingWhereUniqueInput } from "./AggregateRatingWhereUniqueInput";
import { AggregateRatingFindManyArgs } from "./AggregateRatingFindManyArgs";
import { AggregateRatingUpdateInput } from "./AggregateRatingUpdateInput";
import { AggregateRating } from "./AggregateRating";
import { LocalBusinessFindManyArgs } from "../../localBusiness/base/LocalBusinessFindManyArgs";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AggregateRatingControllerBase {
  constructor(
    protected readonly service: AggregateRatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AggregateRating })
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: AggregateRatingCreateInput
  ): Promise<AggregateRating> {
    return await this.service.create({
      data: {
        ...data,

        author: {
          connect: data.author,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AggregateRating] })
  @ApiNestedQuery(AggregateRatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<AggregateRating[]> {
    const args = plainToClass(AggregateRatingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AggregateRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AggregateRatingWhereUniqueInput
  ): Promise<AggregateRating | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AggregateRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AggregateRatingWhereUniqueInput,
    @common.Body() data: AggregateRatingUpdateInput
  ): Promise<AggregateRating | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          author: {
            connect: data.author,
          },
        },
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
  @swagger.ApiOkResponse({ type: AggregateRating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AggregateRating",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AggregateRatingWhereUniqueInput
  ): Promise<AggregateRating | null> {
    try {
      return await this.service.delete({
        where: params,
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
    @common.Param() params: AggregateRatingWhereUniqueInput
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
    resource: "AggregateRating",
    action: "update",
    possession: "any",
  })
  async connectLocalBusiness(
    @common.Param() params: AggregateRatingWhereUniqueInput,
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
    resource: "AggregateRating",
    action: "update",
    possession: "any",
  })
  async updateLocalBusiness(
    @common.Param() params: AggregateRatingWhereUniqueInput,
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
    resource: "AggregateRating",
    action: "update",
    possession: "any",
  })
  async disconnectLocalBusiness(
    @common.Param() params: AggregateRatingWhereUniqueInput,
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
}
