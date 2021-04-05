import express from 'express';

import app from './router/homeRouter';
import apartmentApp from './router/apartmentRouter';

const router = express.Router();

router.use(app);
router.use(apartmentApp);

export default router;
