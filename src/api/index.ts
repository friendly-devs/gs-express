import { Router } from 'express';
import userRouters from './users';

const router = Router();

router.use('/users', userRouters);

export default router;
