import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuService } from "../menu.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuCreateInput } from "./MenuCreateInput";
import { MenuWhereInput } from "./MenuWhereInput";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { MenuFindManyArgs } from "./MenuFindManyArgs";
import { MenuUpdateInput } from "./MenuUpdateInput";
import { Menu } from "./Menu";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { MenuSectionFindManyArgs } from "../../menuSection/base/MenuSectionFindManyArgs";
import { MenuSectionWhereUniqueInput } from "../../menuSection/base/MenuSectionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuControllerBase {
  constructor(
    protected readonly service: MenuService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Menu })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MenuCreateInput): Promise<Menu> {
    return await this.service.create({
      data: {
        ...data,

        seller: {
          connect: data.seller,
        },
      },
      select: {
        id: true,
        name: true,

        seller: {
          select: {
            id: true,
          },
        },

        description: true,
        createdAt: true,
        updatedAt: true,
        fulfillmentModes: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Menu] })
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Menu[]> {
    const args = plainToClass(MenuFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,

        seller: {
          select: {
            id: true,
          },
        },

        description: true,
        createdAt: true,
        updatedAt: true,
        fulfillmentModes: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,

        seller: {
          select: {
            id: true,
          },
        },

        description: true,
        createdAt: true,
        updatedAt: true,
        fulfillmentModes: true,
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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() data: MenuUpdateInput
  ): Promise<Menu | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          seller: {
            connect: data.seller,
          },
        },
        select: {
          id: true,
          name: true,

          seller: {
            select: {
              id: true,
            },
          },

          description: true,
          createdAt: true,
          updatedAt: true,
          fulfillmentModes: true,
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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,

          seller: {
            select: {
              id: true,
            },
          },

          description: true,
          createdAt: true,
          updatedAt: true,
          fulfillmentModes: true,
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
  @common.Get("/:id/MenuItem")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItem(
    @common.Req() request: Request,
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItem(params.id, {
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

  @common.Post("/:id/MenuItem")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async connectMenuItem(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      MenuItem: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/MenuItem")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async updateMenuItem(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      MenuItem: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/MenuItem")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItem(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      MenuItem: {
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
  @common.Get("/:id/hasMenuSection")
  @ApiNestedQuery(MenuSectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuSection",
    action: "read",
    possession: "any",
  })
  async findManyHasMenuSection(
    @common.Req() request: Request,
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<MenuSection[]> {
    const query = plainToClass(MenuSectionFindManyArgs, request.query);
    const results = await this.service.findHasMenuSection(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hasMenuSection")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async connectHasMenuSection(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuSection: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hasMenuSection")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async updateHasMenuSection(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuSection: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hasMenuSection")
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async disconnectHasMenuSection(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() body: MenuSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hasMenuSection: {
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
