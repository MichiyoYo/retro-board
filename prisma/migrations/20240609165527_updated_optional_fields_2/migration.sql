-- DropForeignKey
ALTER TABLE `Board` DROP FOREIGN KEY `Board_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `Card` DROP FOREIGN KEY `Card_listId_fkey`;

-- AlterTable
ALTER TABLE `Board` MODIFY `ownerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Card` MODIFY `listId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Board` ADD CONSTRAINT `Board_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
