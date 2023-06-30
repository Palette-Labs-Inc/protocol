import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OrderController } from "../order.controller";
import { OrderService } from "../order.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  orderDate: new Date(),
  orderETA: new Date(),
  orderReadyTime: new Date(),
  courierArriedTime: new Date(),
  orderPickedupTime: new Date(),
  orderCompleteDate: new Date(),
  confirmationNumber: "exampleConfirmationNumber",
  referenceOrderId: "exampleReferenceOrderId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  orderDate: new Date(),
  orderETA: new Date(),
  orderReadyTime: new Date(),
  courierArriedTime: new Date(),
  orderPickedupTime: new Date(),
  orderCompleteDate: new Date(),
  confirmationNumber: "exampleConfirmationNumber",
  referenceOrderId: "exampleReferenceOrderId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    orderDate: new Date(),
    orderETA: new Date(),
    orderReadyTime: new Date(),
    courierArriedTime: new Date(),
    orderPickedupTime: new Date(),
    orderCompleteDate: new Date(),
    confirmationNumber: "exampleConfirmationNumber",
    referenceOrderId: "exampleReferenceOrderId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  orderDate: new Date(),
  orderETA: new Date(),
  orderReadyTime: new Date(),
  courierArriedTime: new Date(),
  orderPickedupTime: new Date(),
  orderCompleteDate: new Date(),
  confirmationNumber: "exampleConfirmationNumber",
  referenceOrderId: "exampleReferenceOrderId",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Order", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: service,
        },
      ],
      controllers: [OrderController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /orders", async () => {
    await request(app.getHttpServer())
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        orderETA: CREATE_RESULT.orderETA.toISOString(),
        orderReadyTime: CREATE_RESULT.orderReadyTime.toISOString(),
        courierArriedTime: CREATE_RESULT.courierArriedTime.toISOString(),
        orderPickedupTime: CREATE_RESULT.orderPickedupTime.toISOString(),
        orderCompleteDate: CREATE_RESULT.orderCompleteDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /orders", async () => {
    await request(app.getHttpServer())
      .get("/orders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          orderDate: FIND_MANY_RESULT[0].orderDate.toISOString(),
          orderETA: FIND_MANY_RESULT[0].orderETA.toISOString(),
          orderReadyTime: FIND_MANY_RESULT[0].orderReadyTime.toISOString(),
          courierArriedTime:
            FIND_MANY_RESULT[0].courierArriedTime.toISOString(),
          orderPickedupTime:
            FIND_MANY_RESULT[0].orderPickedupTime.toISOString(),
          orderCompleteDate:
            FIND_MANY_RESULT[0].orderCompleteDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /orders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        orderDate: FIND_ONE_RESULT.orderDate.toISOString(),
        orderETA: FIND_ONE_RESULT.orderETA.toISOString(),
        orderReadyTime: FIND_ONE_RESULT.orderReadyTime.toISOString(),
        courierArriedTime: FIND_ONE_RESULT.courierArriedTime.toISOString(),
        orderPickedupTime: FIND_ONE_RESULT.orderPickedupTime.toISOString(),
        orderCompleteDate: FIND_ONE_RESULT.orderCompleteDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /orders existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        orderETA: CREATE_RESULT.orderETA.toISOString(),
        orderReadyTime: CREATE_RESULT.orderReadyTime.toISOString(),
        courierArriedTime: CREATE_RESULT.courierArriedTime.toISOString(),
        orderPickedupTime: CREATE_RESULT.orderPickedupTime.toISOString(),
        orderCompleteDate: CREATE_RESULT.orderCompleteDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/orders")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
