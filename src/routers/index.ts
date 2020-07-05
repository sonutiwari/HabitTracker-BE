import express from 'express';
import rootRouter from './v1/index';
const router = express.Router();
router.use('/v1', rootRouter);
export default router;