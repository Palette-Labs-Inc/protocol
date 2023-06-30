import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NodeService } from "../node.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NodeCreateInput } from "./NodeCreateInput";
import { NodeWhereInput } from "./NodeWhereInput";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { NodeFindManyArgs } from "./NodeFindManyArgs";
import { NodeUpdateInput } from "./NodeUpdateInput";
import { Node } from "./Node";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NodeControllerBase {
  constructor(
    protected readonly service: NodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Node })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: NodeCreateInput): Promise<Node> {
    return await this.service.create({
      data: {
        ...data,

        location: {
          connect: data.location,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Node] })
  @ApiNestedQuery(NodeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Node[]> {
    const args = plainToClass(NodeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: NodeWhereUniqueInput
  ): Promise<Node | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: NodeWhereUniqueInput,
    @common.Body() data: NodeUpdateInput
  ): Promise<Node | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          location: {
            connect: data.location,
          },
        },
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
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: NodeWhereUniqueInput
  ): Promise<Node | null> {
    try {
      return await this.service.delete({
        where: params,
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
