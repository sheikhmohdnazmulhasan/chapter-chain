import { Router } from "express";
import { BookControllers } from "./book.controllers";

const router: Router = Router();

router.post('/', BookControllers.createBook);
router.get('/', BookControllers.readAllBook);
router.get('/:bookId', BookControllers.readSpecificBookById);
router.put('/:bookId', BookControllers.updateBook);

export const BookRoutes = router;