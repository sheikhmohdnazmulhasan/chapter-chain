import { Request, Response } from "express";
import { BookServices } from "./book.services";
import { Book } from "@prisma/client";

async function createBook(req: Request, res: Response) {

    try {
        const result = await BookServices.createBookIntoDb(req.body as Book);
        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

async function readAllBook(_req: Request, res: Response) {

    try {
        const result = await BookServices.readAllBookFromDb();
        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

async function readSpecificBookById(req: Request, res: Response) {

    try {
        const result = await BookServices.readSpecificBookByIdFromDb(req.params.bookId as string);
        res.status(result.status).json(result);

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

export const BookControllers = {
    createBook,
    readAllBook,
    readSpecificBookById
}