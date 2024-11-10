import { Book } from "@prisma/client";

async function createBookIntoDb(payload: Partial<Book>) {

    console.log(payload);
};

export const BookServices = {
    createBookIntoDb
}