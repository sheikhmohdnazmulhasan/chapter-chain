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

async function updateBookFromDb(bookId: string, payload: Partial<Book>) {

    try {

        const result = await prisma.book.update({
            where: {
                bookId
            },
            data: payload
        });

        return {
            success: true,
            status: 200,
            message: 'Book updated successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.meta.cause ? 404 : 400,
            message: error.meta.cause || 'Failed to update book',
        }
    }
};

async function deleteBookFromDb(bookId: string) {

    try {
        await prisma.book.delete({
            where: {
                bookId
            }
        });

        return {
            success: true,
            status: 200,
            message: "Book successfully deleted"
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.meta.cause ? 404 : 400,
            message: error.meta.cause || 'Failed to delete book',
        }
    }

}

export const BookServices = {
    createBookIntoDb,
    readAllBookFromDb,
    readSpecificBookByIdFromDb,
    updateBookFromDb,
    deleteBookFromDb
};