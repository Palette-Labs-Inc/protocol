import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrganizationService } from "../organization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { Organization } from "./Organization";
import { LocalBusinessFindManyArgs } from "../../localBusiness/base/LocalBusinessFindManyArgs";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { LocalBusiness } from "../../localBusiness/base/LocalBusiness";
import { LocalBusinessWhereUniqueInput } from "../../localBusiness/base/LocalBusinessWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: OrganizationCreateInput
  ): Promise<Organization> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organization] })
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        createdAt: true,
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
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() data: OrganizationUpdateInput
  ): Promise<Organization | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          createdAt: true,
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
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          createdAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/LocalBusiness")
  @ApiNestedQuery(LocalBusinessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LocalBusiness",
    action: "read",
    possession: "any",
  })
  async findManyLocalBusiness(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<LocalBusiness[]> {
    const query = plainToClass(LocalBusinessFindManyArgs, request.query);
    const results = await this.service.findLocalBusiness(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        description: true,
        url: true,
        telephone: true,
        servesCuisine: true,

        aggregateRating: {
          select: {
            id: true,
          },
        },

        logo: {
          select: {
            id: true,
          },
        },

        openingHours: true,
        longitude: true,
        latitude: true,
        globalLocationNumber: true,
        faxNumber: true,

        address: {
          select: {
            id: true,
          },
        },

        paymentAccepted: true,
        priceRange: true,
        email: true,
        foundingDate: true,
        createdAt: true,
        updatedAt: true,
        hasPOS: true,
        pos: true,
        branchCode: true,

        parentOrganization: {
          select: {
            id: true,
          },
        },

        category: true,

        Bazaar: {
          select: {
            id: true,
          },
        },

        commission: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectLocalBusiness(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateLocalBusiness(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/LocalBusiness")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectLocalBusiness(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocalBusinessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      LocalBusiness: {
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
