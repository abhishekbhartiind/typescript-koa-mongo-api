import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { dbConnection } from './data';

const app = new Koa();
require('dotenv').config();

dbConnection();
app.use(cors());
app.use(bodyParser());

const PORT: string = process.env.PORT || '3000';

//routes

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

app.use(async (ctx) => {
  msg: 'Welcome to Koa API';
});

export = server;
