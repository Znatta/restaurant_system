-- DropForeignKey
ALTER TABLE `ItemInOrder` DROP FOREIGN KEY `ItemInOrder_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `ItemInOrder` DROP FOREIGN KEY `ItemInOrder_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_cardId_fkey`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemInOrder` ADD CONSTRAINT `ItemInOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemInOrder` ADD CONSTRAINT `ItemInOrder_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
