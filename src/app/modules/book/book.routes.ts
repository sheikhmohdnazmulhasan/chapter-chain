import { Router } from "express";
import { BookControllers } from "./book.controllers";

const router: Router = Router();

router.post('/', BookControllers.createBook);
router.get('/', BookControllers.readAllBook);

export const BookRoutes = router;