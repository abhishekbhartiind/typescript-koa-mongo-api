import router from '@koa/router';
import { addProduct } from '../../resources/product';

const productRouter = new router({
  prefix: '/api/product',
});

productRouter.post('/', addProduct);

export = productRouter;
