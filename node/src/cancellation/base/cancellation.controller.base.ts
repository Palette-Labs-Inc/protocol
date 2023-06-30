import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CancellationService } from "../cancellation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CancellationCreateInput } from "./CancellationCreateInput";
import { CancellationWhereInput } from "./CancellationWhereInput";
import { CancellationWhereUniqueInput } from "./CancellationWhereUniqueInput";
import { CancellationFindManyArgs } from "./CancellationFindManyArgs";
import { CancellationUpdateInput } from "./CancellationUpdateInput";
import { Cancellation } from "./Cancellation";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CancellationControllerBase {
  constructor(
    protected readonly service: CancellationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cancellation })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: CancellationCreateInput
  ): Promise<Cancellation> {
    return await this.service.create({
      data: {
        ...data,

        orderNumber: {
          connect: data.orderNumber,
        },
      },
      select: {
        id: true,

        orderNumber: {
          select: {
            id: true,
          },
        },

        cancelledBy: true,
        createdAt: true,
        isReasonRequired: true,
        reason: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Cancellation] })
  @ApiNestedQuery(CancellationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Cancellation[]> {
    const args = plainToClass(CancellationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,

        orderNumber: {
          select: {
            id: true,
          },
        },

        cancelledBy: true,
        createdAt: true,
        isReasonRequired: true,
        reason: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cancellation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CancellationWhereUniqueInput
  ): Promise<Cancellation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,

        orderNumber: {
          select: {
            id: true,
          },
        },

        cancelledBy: true,
        createdAt: true,
        isReasonRequired: true,
        reason: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Cancellation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CancellationWhereUniqueInput,
    @common.Body() data: CancellationUpdateInput
  ): Promise<Cancellation | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          orderNumber: {
            connect: data.orderNumber,
          },
        },
        select: {
          id: true,

          orderNumber: {
            select: {
              id: true,
            },
          },

          cancelledBy: true,
          createdAt: true,
          isReasonRequired: true,
          reason: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Cancellation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CancellationWhereUniqueInput
  ): Promise<Cancellation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,

          orderNumber: {
            select: {
              id: true,
            },
          },

          cancelledBy: true,
          createdAt: true,
          isReasonRequired: true,
          reason: true,
          updatedAt: true,
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
