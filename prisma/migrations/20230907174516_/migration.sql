/*
  Warnings:

  - Added the required column `aboutYou` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `aboutYou` VARCHAR(191) NOT NULL;
