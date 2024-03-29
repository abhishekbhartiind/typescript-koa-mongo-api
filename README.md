# typescript-koa-mongo-api

Typescript based API with koa and MongoDB

1. Create Github Repo
2. Install few packages

```bash
touch .gitignore

yarn add @koa/cors @koa/router basic-auth bcrypt chai dotenv faker jsonwebtoken koa koa-bodyparser mocha mongoose ramda supertest

yarn add -D @types/basic-auth @types/bcrypt @types/chai @types/dotenv @types/faker @types/jsonwebtoken @types/koa @types/koa-bodyparser @types/koa__cors @types/koa__router @types/mocha @types/mongoose @types/ramda @types/supertest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier prettier ts-node typescript
```

3. Added `.pretteirrc` `.eslintrc` files and added configuration in them
4. Add `.env` file, this should be hidden in [production] mode.
5. Add docker-compose.yml file
6. `tsc --init`
7. Run application with nodemon
```bash
npm install -g nodemon
npm run dev
```

Koa
MongoDB
TypeScript
