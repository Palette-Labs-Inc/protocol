import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MessageService } from "../message.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MessageCreateInput } from "./MessageCreateInput";
import { MessageWhereInput } from "./MessageWhereInput";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageFindManyArgs } from "./MessageFindManyArgs";
import { MessageUpdateInput } from "./MessageUpdateInput";
import { Message } from "./Message";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MessageControllerBase {
  constructor(
    protected readonly service: MessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Message })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MessageCreateInput): Promise<Message> {
    return await this.service.create({
      data: {
        ...data,

        relatedOrder: {
          connect: data.relatedOrder,
        },
      },
      select: {
        id: true,
        sendAt: true,
        senderId: true,
        recipentId: true,
        message: true,

        relatedOrder: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Message] })
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Message[]> {
    const args = plainToClass(MessageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        sendAt: true,
        senderId: true,
        recipentId: true,
        message: true,

        relatedOrder: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        sendAt: true,
        senderId: true,
        recipentId: true,
        message: true,

        relatedOrder: {
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
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MessageWhereUniqueInput,
    @common.Body() data: MessageUpdateInput
  ): Promise<Message | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          relatedOrder: {
            connect: data.relatedOrder,
          },
        },
        select: {
          id: true,
          sendAt: true,
          senderId: true,
          recipentId: true,
          message: true,

          relatedOrder: {
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
  @swagger.ApiOkResponse({ type: Message })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MessageWhereUniqueInput
  ): Promise<Message | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          sendAt: true,
          senderId: true,
          recipentId: true,
          message: true,

          relatedOrder: {
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
