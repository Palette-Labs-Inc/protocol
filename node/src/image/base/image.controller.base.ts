import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ImageService } from "../image.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ImageCreateInput } from "./ImageCreateInput";
import { ImageWhereInput } from "./ImageWhereInput";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageUpdateInput } from "./ImageUpdateInput";
import { Image } from "./Image";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Support } from "../../support/base/Support";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ImageControllerBase {
  constructor(
    protected readonly service: ImageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Image })
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ImageCreateInput): Promise<Image> {
    return await this.service.create({
      data: {
        ...data,

        LocalBusiness: data.LocalBusiness
          ? {
              connect: data.LocalBusiness,
            }
          : undefined,

        MenuItem: data.MenuItem
          ? {
              connect: data.MenuItem,
            }
          : undefined,

        Support: data.Support
          ? {
              connect: data.Support,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Image] })
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Image[]> {
    const args = plainToClass(ImageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() data: ImageUpdateInput
  ): Promise<Image | null> {
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

          MenuItem: data.MenuItem
            ? {
                connect: data.MenuItem,
              }
            : undefined,

          Support: data.Support
            ? {
                connect: data.Support,
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
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
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
  @common.Get("/:id/Review")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findManyReview(
    @common.Req() request: Request,
    @common.Param() params: ImageWhereUniqueInput
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
    resource: "Image",
    action: "update",
    possession: "any",
  })
  async connectReview(
    @common.Param() params: ImageWhereUniqueInput,
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
    resource: "Image",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @common.Param() params: ImageWhereUniqueInput,
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
    resource: "Image",
    action: "update",
    possession: "any",
  })
  async disconnectReview(
    @common.Param() params: ImageWhereUniqueInput,
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
}
