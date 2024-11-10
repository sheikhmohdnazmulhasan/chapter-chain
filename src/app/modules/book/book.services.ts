import { Book } from "@prisma/client";
import { prisma } from "../../constants/prisma_constructor";

async function createBookIntoDb(payload: Book) {

    try {
        const result = await prisma.book.create({
            data: payload
        });

        return {
            success: true,
            status: 201,
            message: 'Book Created Successfully',
            data: result
        }

    } catch (error) {
        return {
            success: false,
            status: 400,
            message: 'Failed to create new book'
        }
    }
};

export const BookServices = {
    createBookIntoDb
}