import { Request, Response } from "express";
import { BookServices } from "./book.services";

async function createBook(req: Request, res: Response) {
    const result = await BookServices.createBookIntoDb(req.body);
};

export const BookControllers = {
    createBook
}