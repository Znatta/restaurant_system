-- DropForeignKey
ALTER TABLE `Table` DROP FOREIGN KEY `Table_cardId_fkey`;

-- AlterTable
ALTER TABLE `Table` MODIFY `cardId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Table` ADD CONSTRAINT `Table_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
