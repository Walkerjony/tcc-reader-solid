/*
  Warnings:

  - Made the column `userId` on table `book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_userId_fkey`;

-- AlterTable
ALTER TABLE `book` MODIFY `userId` VARCHAR(191) NOT NULL;
