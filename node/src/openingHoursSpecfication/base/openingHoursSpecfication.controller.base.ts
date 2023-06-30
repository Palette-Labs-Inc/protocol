import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OpeningHoursSpecficationService } from "../openingHoursSpecfication.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OpeningHoursSpecficationCreateInput } from "./OpeningHoursSpecficationCreateInput";
import { OpeningHoursSpecficationWhereInput } from "./OpeningHoursSpecficationWhereInput";
import { OpeningHoursSpecficationWhereUniqueInput } from "./OpeningHoursSpecficationWhereUniqueInput";
import { OpeningHoursSpecficationFindManyArgs } from "./OpeningHoursSpecficationFindManyArgs";
import { OpeningHoursSpecficationUpdateInput } from "./OpeningHoursSpecficationUpdateInput";
import { OpeningHoursSpecfication } from "./OpeningHoursSpecfication";
import { Promotion } from "../../promotion/base/Promotion";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OpeningHoursSpecficationControllerBase {
  constructor(
    protected readonly service: OpeningHoursSpecficationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OpeningHoursSpecfication })
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: OpeningHoursSpecficationCreateInput
  ): Promise<OpeningHoursSpecfication> {
    return await this.service.create({
      data: {
        ...data,

        Promotion: data.Promotion
          ? {
              connect: data.Promotion,
            }
          : undefined,

        LocalBusiness: data.LocalBusiness
          ? {
              connect: data.LocalBusiness,
            }
          : undefined,
      },
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OpeningHoursSpecfication] })
  @ApiNestedQuery(OpeningHoursSpecficationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<OpeningHoursSpecfication[]> {
    const args = plainToClass(
      OpeningHoursSpecficationFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OpeningHoursSpecfication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OpeningHoursSpecficationWhereUniqueInput
  ): Promise<OpeningHoursSpecfication | null> {
    const result = await this.service.findOne({
      where: params,
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
  @swagger.ApiOkResponse({ type: OpeningHoursSpecfication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OpeningHoursSpecficationWhereUniqueInput,
    @common.Body() data: OpeningHoursSpecficationUpdateInput
  ): Promise<OpeningHoursSpecfication | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Promotion: data.Promotion
            ? {
                connect: data.Promotion,
              }
            : undefined,

          LocalBusiness: data.LocalBusiness
            ? {
                connect: data.LocalBusiness,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: OpeningHoursSpecfication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpeningHoursSpecfication",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OpeningHoursSpecficationWhereUniqueInput
  ): Promise<OpeningHoursSpecfication | null> {
    try {
      return await this.service.delete({
        where: params,
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
