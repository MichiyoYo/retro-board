/*
  Warnings:

  - You are about to drop the column `userId` on the `Board` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Board` DROP FOREIGN KEY `Board_userId_fkey`;

-- AlterTable
ALTER TABLE `Board` DROP COLUMN `userId`,
    ADD COLUMN `ownerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Settings` ADD COLUMN `avatar` VARCHAR(191) NULL,
    MODIFY `theme` VARCHAR(191) NULL,
    MODIFY `language` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Board_ownerId_key` ON `Board`(`ownerId`);

-- AddForeignKey
ALTER TABLE `Board` ADD CONSTRAINT `Board_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
