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
import { NutritionInformationController } from "../nutritionInformation.controller";
import { NutritionInformationService } from "../nutritionInformation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  calories: "exampleCalories",
  servingSize: "exampleServingSize",
  fatContent: "exampleFatContent",
  fiberContent: "exampleFiberContent",
  proteinContent: "exampleProteinContent",
  saturatedFatContent: "exampleSaturatedFatContent",
  unsaturatedFatContent: "exampleUnsaturatedFatContent",
  sugarContent: "exampleSugarContent",
  transFatContent: "exampleTransFatContent",
  sodiumContent: "exampleSodiumContent",
};
const CREATE_RESULT = {
  id: "exampleId",
  calories: "exampleCalories",
  servingSize: "exampleServingSize",
  fatContent: "exampleFatContent",
  fiberContent: "exampleFiberContent",
  proteinContent: "exampleProteinContent",
  saturatedFatContent: "exampleSaturatedFatContent",
  unsaturatedFatContent: "exampleUnsaturatedFatContent",
  sugarContent: "exampleSugarContent",
  transFatContent: "exampleTransFatContent",
  sodiumContent: "exampleSodiumContent",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    calories: "exampleCalories",
    servingSize: "exampleServingSize",
    fatContent: "exampleFatContent",
    fiberContent: "exampleFiberContent",
    proteinContent: "exampleProteinContent",
    saturatedFatContent: "exampleSaturatedFatContent",
    unsaturatedFatContent: "exampleUnsaturatedFatContent",
    sugarContent: "exampleSugarContent",
    transFatContent: "exampleTransFatContent",
    sodiumContent: "exampleSodiumContent",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  calories: "exampleCalories",
  servingSize: "exampleServingSize",
  fatContent: "exampleFatContent",
  fiberContent: "exampleFiberContent",
  proteinContent: "exampleProteinContent",
  saturatedFatContent: "exampleSaturatedFatContent",
  unsaturatedFatContent: "exampleUnsaturatedFatContent",
  sugarContent: "exampleSugarContent",
  transFatContent: "exampleTransFatContent",
  sodiumContent: "exampleSodiumContent",
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

describe("NutritionInformation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NutritionInformationService,
          useValue: service,
        },
      ],
      controllers: [NutritionInformationController],
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

  test("POST /nutritionInformations", async () => {
    await request(app.getHttpServer())
      .post("/nutritionInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /nutritionInformations", async () => {
    await request(app.getHttpServer())
      .get("/nutritionInformations")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /nutritionInformations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/nutritionInformations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /nutritionInformations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/nutritionInformations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /nutritionInformations existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/nutritionInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/nutritionInformations")
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
