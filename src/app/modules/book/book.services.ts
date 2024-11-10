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

    } catch (error: any) {
        return {
            success: false,
            status: 400,
            message: 'Failed to create new book'
        }
    }
};

async function readAllBookFromDb() {

    try {
        const result = await prisma.book.findMany();

        return {
            success: true,
            status: 200,
            message: 'Books retrieved successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: 400,
            message: 'Failed to fetch books'
        }
    }
};

async function readSpecificBookByIdFromDb(bookId: string) {

    try {
        const result = await prisma.book.findUniqueOrThrow({
            where: {
                bookId
            }
        });

        return {
            success: true,
            status: 200,
            message: 'Book retrieved successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.name === 'NotFoundError' ? 404 : 400,
            message: error.name || 'Failed to fetch book'
        }
    }
};

export const BookServices = {
    createBookIntoDb,
    readAllBookFromDb,
    readSpecificBookByIdFromDb
};