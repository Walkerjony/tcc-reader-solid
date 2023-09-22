/*
  Warnings:

  - You are about to drop the column `username` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `comment` table. All the data in the column will be lost.
  - The primary key for the `like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `like` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `like` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `userId` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_userId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `like` DROP FOREIGN KEY `Like_userId_fkey`;

-- DropIndex
DROP INDEX `user_username_key` ON `user`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `username`,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `username`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `like` DROP PRIMARY KEY,
    DROP COLUMN `username`,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `Book_userId_fkey` ON `book`(`userId`);

-- CreateIndex
CREATE INDEX `Comment_userId_fkey` ON `comment`(`userId`);

-- CreateIndex
CREATE INDEX `Like_userId_fkey` ON `like`(`userId`);

-- AddForeignKey
ALTER TABLE `book` ADD CONSTRAINT `Book_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
