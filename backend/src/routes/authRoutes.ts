import express from 'express';

import userRoutes from './Auth/user'
import adminRoutes from './Auth/admin'
const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router;