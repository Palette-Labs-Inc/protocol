import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuSectionService } from "../menuSection.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuSectionCreateInput } from "./MenuSectionCreateInput";
import { MenuSectionWhereInput } from "./MenuSectionWhereInput";
import { MenuSectionWhereUniqueInput } from "./MenuSectionWhereUniqueInput";
import { MenuSectionFindManyArgs } from "./MenuSectionFindManyArgs";
import { MenuSectionUpdateInput } from "./MenuSectionUpdateInput";
import { MenuSection } from "./MenuSection";
import { Menu } from "../../menu/base/Menu";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuSectionControllerBase {
  constructor(
    protected readonly service: MenuSectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuSection })
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MenuSectionCreateInput
  ): Promise<MenuSection> {
    return await this.service.create({
      data: {
        ...data,

        Menu: data.Menu
          ? {
              connect: data.Menu,
            }
          : undefined,
      },
      select: {
        id: true,
        name: true,
        description: true,

        Menu: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuSection] })
  @ApiNestedQuery(MenuSectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MenuSection[]> {
    const args = plainToClass(MenuSectionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        description: true,

        Menu: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuSectionWhereUniqueInput
  ): Promise<MenuSection | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        description: true,

        Menu: {
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
  @swagger.ApiOkResponse({ type: MenuSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuSectionWhereUniqueInput,
    @common.Body() data: MenuSectionUpdateInput
  ): Promise<MenuSection | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Menu: data.Menu
            ? {
                connect: data.Menu,
              }
            : undefined,
        },
        select: {
          id: true,
          name: true,
          description: true,

          Menu: {
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
  @swagger.ApiOkResponse({ type: MenuSection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuSectionWhereUniqueInput
  ): Promise<MenuSection | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          description: true,

          Menu: {
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
  @common.Get("/:id/hasMenuItem")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyHasMenuItem(
    @common.Req() request: Request,
    @common.Param() params: MenuSectionWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findHasMenuItem(params.id, {
      ...query,
      select: {
        id: true,

        Menu: {
          select: {
            id: true,
          },
        },

        name: true,

        nutrition: {
          select: {
            id: true,
          },
        },

        description: true,
        price: true,
        priceCurrency: true,
        quantity: true,
        maximumPurchasableCount: true,
        minimumPurchasableCount: true,
        itemStatus: true,
        fulfillmentMode: true,
        createAt: true,
        updatedAt: true,

        MenuSection: {
          select: {
            id: true,
          },
        },

        suitableForDiet: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hasMenuItem")
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "update",
    possession: "any",
  })
  async connectHasMenuItem(
    @common.Param() params: MenuSectionWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuItem: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hasMenuItem")
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "update",
    possession: "any",
  })
  async updateHasMenuItem(
    @common.Param() params: MenuSectionWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuItem: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hasMenuItem")
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "update",
    possession: "any",
  })
  async disconnectHasMenuItem(
    @common.Param() params: MenuSectionWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuItem: {
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
