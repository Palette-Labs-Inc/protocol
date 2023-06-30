import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { BazaarModule } from "./bazaar/bazaar.module";
import { MenuItemModule } from "./menuItem/menuItem.module";
import { LocalBusinessModule } from "./localBusiness/localBusiness.module";
import { AggregateRatingModule } from "./aggregateRating/aggregateRating.module";
import { ReviewModule } from "./review/review.module";
import { OpeningHoursSpecficationModule } from "./openingHoursSpecfication/openingHoursSpecfication.module";
import { PostalAddressModule } from "./postalAddress/postalAddress.module";
import { OrganizationModule } from "./organization/organization.module";
import { PromotionModule } from "./promotion/promotion.module";
import { ImageModule } from "./image/image.module";
import { LogoModule } from "./logo/logo.module";
import { CustomerModule } from "./customer/customer.module";
import { CourierModule } from "./courier/courier.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { OrderModule } from "./order/order.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { PaymentTermModule } from "./paymentTerm/paymentTerm.module";
import { OrderDeliveryModule } from "./orderDelivery/orderDelivery.module";
import { MenuModule } from "./menu/menu.module";
import { MenuSectionModule } from "./menuSection/menuSection.module";
import { NutritionInformationModule } from "./nutritionInformation/nutritionInformation.module";
import { CancellationModule } from "./cancellation/cancellation.module";
import { QuoteModule } from "./quote/quote.module";
import { SupportModule } from "./support/support.module";
import { NodeModule } from "./node/node.module";
import { MessageModule } from "./message/message.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    BazaarModule,
    MenuItemModule,
    LocalBusinessModule,
    AggregateRatingModule,
    ReviewModule,
    OpeningHoursSpecficationModule,
    PostalAddressModule,
    OrganizationModule,
    PromotionModule,
    ImageModule,
    LogoModule,
    CustomerModule,
    CourierModule,
    VehicleModule,
    OrderModule,
    OrderItemModule,
    PaymentTermModule,
    OrderDeliveryModule,
    MenuModule,
    MenuSectionModule,
    NutritionInformationModule,
    CancellationModule,
    QuoteModule,
    SupportModule,
    NodeModule,
    MessageModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
