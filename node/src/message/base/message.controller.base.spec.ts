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
import { MessageController } from "../message.controller";
import { MessageService } from "../message.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  sendAt: new Date(),
  senderId: "exampleSenderId",
  recipentId: "exampleRecipentId",
  message: "exampleMessage",
};
const CREATE_RESULT = {
  id: "exampleId",
  sendAt: new Date(),
  senderId: "exampleSenderId",
  recipentId: "exampleRecipentId",
  message: "exampleMessage",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    sendAt: new Date(),
    senderId: "exampleSenderId",
    recipentId: "exampleRecipentId",
    message: "exampleMessage",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  sendAt: new Date(),
  senderId: "exampleSenderId",
  recipentId: "exampleRecipentId",
  message: "exampleMessage",
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

describe("Message", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MessageService,
          useValue: service,
        },
      ],
      controllers: [MessageController],
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

  test("POST /messages", async () => {
    await request(app.getHttpServer())
      .post("/messages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        sendAt: CREATE_RESULT.sendAt.toISOString(),
      });
  });

  test("GET /messages", async () => {
    await request(app.getHttpServer())
      .get("/messages")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          sendAt: FIND_MANY_RESULT[0].sendAt.toISOString(),
        },
      ]);
  });

  test("GET /messages/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/messages"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /messages/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/messages"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        sendAt: FIND_ONE_RESULT.sendAt.toISOString(),
      });
  });

  test("POST /messages existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/messages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        sendAt: CREATE_RESULT.sendAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/messages")
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
