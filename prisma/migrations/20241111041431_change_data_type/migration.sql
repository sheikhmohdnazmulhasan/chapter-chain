/*
  Warnings:

  - The `returnDate` column on the `borrows` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "borrows" DROP COLUMN "returnDate",
ADD COLUMN     "returnDate" TIMESTAMP(3);
