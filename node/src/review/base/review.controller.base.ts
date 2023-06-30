import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ReviewService } from "../review.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReviewCreateInput } from "./ReviewCreateInput";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewUpdateInput } from "./ReviewUpdateInput";
import { Review } from "./Review";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { Courier } from "../../courier/base/Courier";
import { MenuItem } from "../../menuItem/base/MenuItem";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReviewControllerBase {
  constructor(
    protected readonly service: ReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Review })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ReviewCreateInput): Promise<Review> {
    return await this.service.create({
      data: {
        ...data,

        LocalBusiness: data.LocalBusiness
          ? {
              connect: data.LocalBusiness,
            }
          : undefined,

        author: {
          connect: data.author,
        },

        image: {
          connect: data.image,
        },

        Courier: data.Courier
          ? {
              connect: data.Courier,
            }
          : undefined,

        MenuItem: data.MenuItem
          ? {
              connect: data.MenuItem,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Review] })
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Review[]> {
    const args = plainToClass(ReviewFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ReviewWhereUniqueInput,
    @common.Body() data: ReviewUpdateInput
  ): Promise<Review | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          LocalBusiness: data.LocalBusiness
            ? {
                connect: data.LocalBusiness,
              }
            : undefined,

          author: {
            connect: data.author,
          },

          image: {
            connect: data.image,
          },

          Courier: data.Courier
            ? {
                connect: data.Courier,
              }
            : undefined,

          MenuItem: data.MenuItem
            ? {
                connect: data.MenuItem,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    try {
      return await this.service.delete({
        where: params,
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
