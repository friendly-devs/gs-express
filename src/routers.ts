import { Router } from 'express';
import apiRouters from './api';

const version = 'v1';
const router = Router();

router.use(`/api/${version}`, apiRouters);

export default router;
