/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Board` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Board` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Board` DROP FOREIGN KEY `Board_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Board` DROP COLUMN `ownerId`,
    ADD COLUMN `userId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Board_userId_key` ON `Board`(`userId`);

-- AddForeignKey
ALTER TABLE `Board` ADD CONSTRAINT `Board_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
