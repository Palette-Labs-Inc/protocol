import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NutritionInformationService } from "../nutritionInformation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NutritionInformationCreateInput } from "./NutritionInformationCreateInput";
import { NutritionInformationWhereInput } from "./NutritionInformationWhereInput";
import { NutritionInformationWhereUniqueInput } from "./NutritionInformationWhereUniqueInput";
import { NutritionInformationFindManyArgs } from "./NutritionInformationFindManyArgs";
import { NutritionInformationUpdateInput } from "./NutritionInformationUpdateInput";
import { NutritionInformation } from "./NutritionInformation";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuSection } from "../../menuSection/base/MenuSection";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NutritionInformationControllerBase {
  constructor(
    protected readonly service: NutritionInformationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NutritionInformation })
  @nestAccessControl.UseRoles({
    resource: "NutritionInformation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: NutritionInformationCreateInput
  ): Promise<NutritionInformation> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        calories: true,
        servingSize: true,
        fatContent: true,
        fiberContent: true,
        proteinContent: true,
        saturatedFatContent: true,
        unsaturatedFatContent: true,
        sugarContent: true,
        transFatContent: true,
        sodiumContent: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [NutritionInformation] })
  @ApiNestedQuery(NutritionInformationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "NutritionInformation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<NutritionInformation[]> {
    const args = plainToClass(NutritionInformationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        calories: true,
        servingSize: true,
        fatContent: true,
        fiberContent: true,
        proteinContent: true,
        saturatedFatContent: true,
        unsaturatedFatContent: true,
        sugarContent: true,
        transFatContent: true,
        sodiumContent: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NutritionInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NutritionInformation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: NutritionInformationWhereUniqueInput
  ): Promise<NutritionInformation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        calories: true,
        servingSize: true,
        fatContent: true,
        fiberContent: true,
        proteinContent: true,
        saturatedFatContent: true,
        unsaturatedFatContent: true,
        sugarContent: true,
        transFatContent: true,
        sodiumContent: true,
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
  @swagger.ApiOkResponse({ type: NutritionInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NutritionInformation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: NutritionInformationWhereUniqueInput,
    @common.Body() data: NutritionInformationUpdateInput
  ): Promise<NutritionInformation | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          calories: true,
          servingSize: true,
          fatContent: true,
          fiberContent: true,
          proteinContent: true,
          saturatedFatContent: true,
          unsaturatedFatContent: true,
          sugarContent: true,
          transFatContent: true,
          sodiumContent: true,
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
  @swagger.ApiOkResponse({ type: NutritionInformation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NutritionInformation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: NutritionInformationWhereUniqueInput
  ): Promise<NutritionInformation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          calories: true,
          servingSize: true,
          fatContent: true,
          fiberContent: true,
          proteinContent: true,
          saturatedFatContent: true,
          unsaturatedFatContent: true,
          sugarContent: true,
          transFatContent: true,
          sodiumContent: true,
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
    @common.Param() params: NutritionInformationWhereUniqueInput
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
    resource: "NutritionInformation",
    action: "update",
    possession: "any",
  })
  async connectMenuItem(
    @common.Param() params: NutritionInformationWhereUniqueInput,
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
    resource: "NutritionInformation",
    action: "update",
    possession: "any",
  })
  async updateMenuItem(
    @common.Param() params: NutritionInformationWhereUniqueInput,
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
    resource: "NutritionInformation",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItem(
    @common.Param() params: NutritionInformationWhereUniqueInput,
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
}
