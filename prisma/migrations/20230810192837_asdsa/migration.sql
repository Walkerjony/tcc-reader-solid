/*
  Warnings:

  - You are about to drop the column `author` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `author`,
    DROP COLUMN `description`,
    DROP COLUMN `title`;
