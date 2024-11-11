import { Request, Response } from "express";
import { ReturnServices } from "./return.services";

async function returnBook(req: Request, res: Response) {

    try {
        const result = await ReturnServices.returnBookIntoDb(req.body.borrowId as string)
        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

export const BorrowControllers = {
    returnBook
}