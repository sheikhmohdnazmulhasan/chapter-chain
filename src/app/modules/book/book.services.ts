import { Book } from "@prisma/client";

async function createBookIntoDb(payload: Partial<Book>) {

    try {
        const result = await 
    } catch (error) {

    }
};

export const BookServices = {
    createBookIntoDb
}