import { Book, Member } from "@prisma/client";
import { prisma } from "../../constants/prisma_constructor";

async function createMemberIntoDb(payload: Member) {

    try {
        const result = await prisma.member.create({
            data: payload
        });

        return {
            success: true,
            status: 201,
            message: 'Member Created Successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: 400,
            message: error.code === 'P2002' ? 'Email Already Exist' : 'Failed to create new member',
        }
    }
};

async function readAllMemberFromDb() {

    try {
        const result = await prisma.member.findMany();

        return {
            success: true,
            status: 200,
            message: 'Members retrieved successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: 400,
            message: 'Failed to fetch members'
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
            error
        }
    }

}

export const MemberServices = {
    createMemberIntoDb,
    readAllMemberFromDb
};