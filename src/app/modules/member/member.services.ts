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

async function readSpecificMemberByIdFromDb(memberId: string) {

    try {
        const result = await prisma.member.findUniqueOrThrow({
            where: {
                memberId
            }
        });

        return {
            success: true,
            status: 200,
            message: 'Member retrieved successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.name === 'NotFoundError' ? 404 : 400,
            message: error.name || 'Failed to fetch member'
        }
    }
};

async function updateMemberFromDb(memberId: string, payload: Partial<Member>) {

    try {

        const result = await prisma.member.update({
            where: {
                memberId
            },
            data: payload
        });

        return {
            success: true,
            status: 200,
            message: 'Member updated successfully',
            data: result
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.meta.cause ? 404 : 400,
            message: error.meta.cause || 'Failed to update member',
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
    readAllMemberFromDb,
    readSpecificMemberByIdFromDb,
    updateMemberFromDb
};