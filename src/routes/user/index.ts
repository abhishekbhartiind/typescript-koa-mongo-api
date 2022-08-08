import router from '@koa/router';
import { addUser } from '../../resources/users';

const userRouter = new router({
  prefix: '/api/users',
});

userRouter.post('/', addUser);

export = userRouter;
