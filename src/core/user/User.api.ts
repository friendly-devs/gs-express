import { Router } from 'express';
import { UserService } from './User.service';

/**
 * Prefix api/v1/users
 */
const router = Router();
const userService = new UserService();

router.post('/', async (req, res, next) => {
  const userDto = req.body;
  try {
    const userRes = await userService.create(userDto);
    return res.send(userRes);
  } catch(e) {
    return next();
  }
});

router.get('/', async (req, res, next) => {
  const users = await userService.findAll();
  res.send(users);
});

export default router;
