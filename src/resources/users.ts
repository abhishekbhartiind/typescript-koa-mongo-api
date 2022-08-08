import { Context } from 'koa';
import UserModel from '../models/user';
import { generateToken } from '../functions/create-token';
import { encrypt } from '../functions/secure-data';

type UserInput = {
  name: string;
  email: string;
  password: string;
};

const addUser = async (ctx: Context) => {
  const { name, email, password } = ctx.request.body as UserInput;

  if (!name)
    ctx.throw(400, {
      message: "Please enter user's name",
    });

  if (!email)
    ctx.throw(400, {
      message: "Please enter user's email",
    });

  if (!password)
    ctx.throw(400, {
      message: "Please enter user's password",
    });

  const existingEmail = await UserModel.findOne({ email });
  if (existingEmail)
    ctx.throw(404, {
      message: 'Email already exist, please try different email',
    });

  //insert new user
  const user = await UserModel.create({
    name,
    email,
    password: await encrypt(password),
  });

  const token = generateToken(user);
  ctx.status = 201;
  ctx.body = { token };
};

export { addUser };
