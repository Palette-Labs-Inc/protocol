# Server - the backend API

Ensure you read through this whole README before starting backend development.

## Getting Started

### Prerequisites

Make sure you have Node.js 16.x, npm, and [Docker](https://www.docker.com/products/docker-desktop/) installed.

### Local development setup

Here's how to get started with development on the backend server. Ensure Docker is running!

Follow these commands in order to set up the database and server:

```shell
cd apps/server
npm install             # will also automatically run prepare set up our commit hooks, which we use to enforce code formatting and quality standards.
npm run docker:db       # Start database using Docker
npm run prisma:generate # Generate Prisma client
npm run db:init         # Initialize the database
npm run start:debug     # Start the server in development mode (watch & debug).
```

Now that this initial setup is complete, going forward you can use `npm run dev` to start the database and server in development mode.
**IMPORTANT NOTE:** if you make any changes to DTOs or the Prisma schema, you must regenerate your prisma client with `npm run prisma:generate` before starting the server.

### Alternative: Docker Compose setup

In the `server` subdirectory, run:

```console
npm run compose:up
```

## Known errors:
- [ ] ! db The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested 0.0s. Issue with M1 and M2 chips running local docker container with [PostGIS image](https://registry.hub.docker.com/r/postgis/postgis/tags?page=1&name=12-3.3)

## Available Scripts

In the `server` subdirectory, you can run:

### `npm run format`

Runs Prettier and fixes formatting issues. We use Prettier to enforce a code format standard.

### `npm run lint`

Runs ESLint and fixes any auto-fixable issues. We use ESLint to ensure a standardized code quality baseline.
Outputs any remaining warnings or errors.

### `npm run typecheck`

Runs tsc to check for TypeScript compilation errors. 

Common issues:
- a bunch of Prisma errors → run `npm run prisma:generate`
- a bunch of `Object literal may only specify known properties` → run `npm run prisma:generate`

### `npm run dev`
Assuming Docker is running, this initializes the db, runs prisma generate, and starts the app in development mode.
By default, it is accessible at http://localhost:3000.
Swagger UI is accessible at http://localhost:3000/api.

### `npm start`, `npm start:watch`, & `npm start:debug`

Runs the app in standard, watch, or watch & debug modes.
By default, it is accessible at http://localhost:3000

### `npm test`

Runs tests. Currently our testing suite is a work in progress / not functional.

### `npm run build`

Builds the app for production in the `dist` folder.

Your app is ready to be deployed!

## To Run Prisma Studio
[Prisma Studio](https://www.prisma.io/blog/prisma-studio-3rtf78dg99fe) is a data manipulation and exploration tool. 

In the `server` subdirectory, you can use prisma studio by running:

```console
cd server
cp .env .env.local
npx prisma studio
```

## Environment Variables (work in progress):

| Environment          | Description                              | Value                                                      |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| DEBUG_MODE           | Debug level                              | 1                                                          |
| DB_URL               | Local database connection URL            | db-provider://admin:admin@localhost:${DB_PORT}/\${DB_NAME} |
| DB_PORT              | Local database port                      |                                                            |
| DB_USER              | Local database username                  | admin                                                      |
| DB_PASSWORD          | Local database password                  | admin                                                      |
| COMPOSE_PROJECT_NAME | Docker Compose project name              | utp-node                                                   |
| SERVER_PORT          | The port that the server is listening to | 3000                                                       |
| JWT_SECRET_KEY       | JWT secret                               | Change_ME!!!                                               |
| JWT_EXPIRATION       | JWT expiration in days                   | 2d                                                         |

\*db-provider - the prisma DB provider (for example: for postgres is postgresql)
