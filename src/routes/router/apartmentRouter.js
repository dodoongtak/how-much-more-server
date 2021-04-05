import express from 'express';

import Execute from '../router.exec';
import { apartment } from '../route';

import { getApartmentController } from '../../controllers';

const apartmentApp = express();

const apartmentRouter = new Execute(apartmentApp);

apartmentRouter.use(apartment.GetApartment, getApartmentController);

export default apartmentApp;
