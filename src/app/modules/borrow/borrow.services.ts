import { Borrow } from "@prisma/client";
import { prisma } from "../../constants/prisma_constructor";

async function createNewBorrowIntoDb(payload: Borrow) {

    try {
        const result = await prisma.borrow.create({
            data: payload
        });

        return {
            success: true,
            status: 200,
            message: 'Book borrowed successfully',
            data: result
        }

    } catch (error) {
        return {
            success: false,
            status: 400,
            message: 'Failed to create new borrow'
        }
    }
};

export const BorrowServices = {
    createNewBorrowIntoDb
}