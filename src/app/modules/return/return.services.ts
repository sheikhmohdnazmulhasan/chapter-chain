import { prisma } from "../../constants/prisma_constructor"

async function returnBookIntoDb(borrowId: string) {

    try {
        await prisma.borrow.update({
            where: {
                borrowId
            },
            data: {
                returnDate: new Date()
            }
        });

        return {
            success: true,
            status: 200,
            message: 'Book returned successfully'
        }

    } catch (error: any) {
        return {
            success: false,
            status: error.meta.cause ? 404 : 400,
            message: error.meta.cause || 'Failed to return book',
        }
    }

};

export const ReturnServices = {
    returnBookIntoDb
}