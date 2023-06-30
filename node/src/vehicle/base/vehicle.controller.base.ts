import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VehicleService } from "../vehicle.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VehicleCreateInput } from "./VehicleCreateInput";
import { VehicleWhereInput } from "./VehicleWhereInput";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleUpdateInput } from "./VehicleUpdateInput";
import { Vehicle } from "./Vehicle";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VehicleControllerBase {
  constructor(
    protected readonly service: VehicleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vehicle })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: VehicleCreateInput): Promise<Vehicle> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        capacity: true,
        category: true,
        code: true,
        color: true,
        model: true,
        registeration: true,
        size: true,
        wheelCount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Vehicle] })
  @ApiNestedQuery(VehicleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Vehicle[]> {
    const args = plainToClass(VehicleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        capacity: true,
        category: true,
        code: true,
        color: true,
        model: true,
        registeration: true,
        size: true,
        wheelCount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        capacity: true,
        category: true,
        code: true,
        color: true,
        model: true,
        registeration: true,
        size: true,
        wheelCount: true,
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
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() data: VehicleUpdateInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          capacity: true,
          category: true,
          code: true,
          color: true,
          model: true,
          registeration: true,
          size: true,
          wheelCount: true,
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
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          capacity: true,
          category: true,
          code: true,
          color: true,
          model: true,
          registeration: true,
          size: true,
          wheelCount: true,
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
  @common.Get("/:id/Courier")
  @ApiNestedQuery(CourierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async findManyCourier(
    @common.Req() request: Request,
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Courier[]> {
    const query = plainToClass(CourierFindManyArgs, request.query);
    const results = await this.service.findCourier(params.id, {
      ...query,
      select: {
        id: true,
        givenName: true,
        familyName: true,
        birthDate: true,
        telephone: true,

        address: {
          select: {
            id: true,
          },
        },

        email: true,
        gender: true,

        vehicle: {
          select: {
            id: true,
          },
        },

        rating: true,

        bazaar: {
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

  @common.Post("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async connectCourier(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async updateCourier(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Courier")
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async disconnectCourier(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Courier: {
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
