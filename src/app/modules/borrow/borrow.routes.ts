import { Router } from "express";
import { BorrowControllers } from "./borrow.controllers";

const router: Router = Router();

router.post('/', BorrowControllers.createNewBorrow);
router.get('/overdue', BorrowControllers.readAllOverdue);

export const BorrowRoutes = router