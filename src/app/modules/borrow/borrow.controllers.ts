import { Request, Response } from "express";
import { BorrowServices } from "./borrow.services";
import { Borrow } from "@prisma/client";

async function createNewBorrow(req: Request, res: Response) {

    try {
        const result = await BorrowServices.createNewBorrowIntoDb(req.body as Borrow);
        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

async function readAllOverdue(_req: Request, res: Response) {

    try {
        const result = await BorrowServices.readAllOverdueFromDb();
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
    createNewBorrow,
    readAllOverdue
}