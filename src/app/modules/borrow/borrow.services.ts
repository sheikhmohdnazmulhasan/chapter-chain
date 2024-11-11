import { Borrow } from "@prisma/client";
import { prisma } from "../../constants/prisma_constructor";
import { differenceInDays } from 'date-fns';

async function createNewBorrowIntoDb(payload: Borrow) {

    try {
        const { returnDate, ...resultWithoutReturnDate } = await prisma.borrow.create({
            data: payload
        });

        return {
            success: true,
            status: 200,
            message: 'Book borrowed successfully',
            data: resultWithoutReturnDate
        }

    } catch (error) {
        return {
            success: false,
            status: 400,
            message: 'Failed to create new borrow'
        }
    }
};

async function readAllOverdueFromDb() {
    try {
        const today = new Date();

        const result = await prisma.borrow.findMany({
            where: {
                returnDate: null
            },
            include: {
                book: {
                    select: {
                        title: true
                    }
                },
                member: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (result.length) {
            // Map the result to format and calculate overdueDays
            const formattedResult = result.map(borrow => ({
                borrowId: borrow.bookId,
                bookTitle: borrow.book.title,
                borrowerName: borrow.member.name,
                overdueDays: differenceInDays(today, new Date(borrow.borrowDate))
            }));

            return {
                success: true,
                status: 200,
                message: 'Overdue borrow list fetched',
                data: formattedResult
            };

        } else {
            return {
                success: true,
                status: 200,
                message: 'No overdue Books',
                data: []
            }

        }

    } catch (error) {
        return {
            success: false,
            status: 400,
            message: 'Failed to fetch overdue data'
        };
    }
}


export const BorrowServices = {
    createNewBorrowIntoDb,
    readAllOverdueFromDb
}