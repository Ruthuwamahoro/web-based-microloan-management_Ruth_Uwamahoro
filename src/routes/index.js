import { Router } from 'express';
import UserRouter from './userRoute';
import ProductRouter from './productRoute';
import rolerouter from './role';
import authRouter from './authRoute';
import categoryRouter from './categoryRoute';
import wishlistRouter from './wishlistRoute';
import reviewRouter from './reviewRoute';
import routercart from './cartRoutes';
import statsRoute from './statsRoute';
const routerLoan = require("./loan");
const routerAuth = require("./authRoutes")

const router = Router();
const routers= [
    routerLoan,
    routerAuth
];

router.use('/api', routers);

export default router;
