import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SupportService } from "../support.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupportCreateInput } from "./SupportCreateInput";
import { SupportWhereInput } from "./SupportWhereInput";
import { SupportWhereUniqueInput } from "./SupportWhereUniqueInput";
import { SupportFindManyArgs } from "./SupportFindManyArgs";
import { SupportUpdateInput } from "./SupportUpdateInput";
import { Support } from "./Support";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupportControllerBase {
  constructor(
    protected readonly service: SupportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Support })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SupportCreateInput): Promise<Support> {
    return await this.service.create({
      data: {
        ...data,

        customer: {
          connect: data.customer,
        },

        orderNumber: {
          connect: data.orderNumber,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Support] })
  @ApiNestedQuery(SupportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Support[]> {
    const args = plainToClass(SupportFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Support })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SupportWhereUniqueInput
  ): Promise<Support | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Support })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SupportWhereUniqueInput,
    @common.Body() data: SupportUpdateInput
  ): Promise<Support | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customer: {
            connect: data.customer,
          },

          orderNumber: {
            connect: data.orderNumber,
          },
        },
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
  @swagger.ApiOkResponse({ type: Support })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SupportWhereUniqueInput
  ): Promise<Support | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/photo")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyPhoto(
    @common.Req() request: Request,
    @common.Param() params: SupportWhereUniqueInput
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
    resource: "Support",
    action: "update",
    possession: "any",
  })
  async connectPhoto(
    @common.Param() params: SupportWhereUniqueInput,
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
    resource: "Support",
    action: "update",
    possession: "any",
  })
  async updatePhoto(
    @common.Param() params: SupportWhereUniqueInput,
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
    resource: "Support",
    action: "update",
    possession: "any",
  })
  async disconnectPhoto(
    @common.Param() params: SupportWhereUniqueInput,
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
}
