import { Router } from "express";
import { BorrowControllers } from "./borrow.controllers";

const router: Router = Router();

router.post('/', BorrowControllers.createNewBorrow);

export const BorrowRoutes = router