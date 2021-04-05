import express from 'express';

import Execute from '../router.exec';
import { home } from '../route';

import { homeController } from '../../controllers';

const app = express();

const homeRouter = new Execute(app);

homeRouter.use(home.Home, homeController);

export default app;
