/*
  Warnings:

  - Added the required column `userId` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Like_userId_fkey` ON `like`;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `like` ADD CONSTRAINT `like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
