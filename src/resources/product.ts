import { Context } from 'koa';
import ProductModel from '../models/products';

type ProductInput = {
  id: string;
  name: string;
  price: number;
  createdBy: string;
  cursor: string;
};

const addProduct = async (ctx: Context) => {
  const { id, name, price, createdBy, cursor } = ctx.request
    .body as ProductInput;

  if (!id)
    ctx.throw(400, {
      message: "Please enter product's id",
    });

  if (!name)
    ctx.throw(400, {
      message: "Please enter product's name",
    });

  if (!price)
    ctx.throw(400, {
      message: "Please enter product's price",
    });

  if (!createdBy)
    ctx.throw(400, {
      message: "Please enter product's createdBy",
    });

  if (!cursor)
    ctx.throw(400, {
      message: "Please enter product's cursor",
    });

  const existingProduct = await ProductModel.findOne({ id });
  if (existingProduct)
    ctx.throw(404, {
      message: 'Product already exist, please try different email',
    });

  //insert new product
  const product = await ProductModel.create({
    id,
    name,
    price,
    createdBy,
    cursor,
  });

  ctx.status = 201;
  ctx.body = { product };
};

export { addProduct };
