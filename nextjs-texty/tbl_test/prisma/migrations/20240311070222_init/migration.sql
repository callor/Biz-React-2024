/*
  Warnings:

  - You are about to drop the `tbl_notice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tbl_notice`;

-- CreateTable
CREATE TABLE `tbl_inven` (
    `i_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `i_item` VARCHAR(191) NOT NULL,
    `i_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`i_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
