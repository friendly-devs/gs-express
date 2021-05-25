import { Router } from 'express';
import userRouters from './user/User.api';

const router = Router();

router.use('/users', userRouters);

export default router;
