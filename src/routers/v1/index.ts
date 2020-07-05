import express from 'express';
import userRouter from './user.router';
import habitRouter from './habit.router';
const rootRouter = express.Router();
rootRouter.use('/user', userRouter);
rootRouter.use('/habit', habitRouter);
export default rootRouter;