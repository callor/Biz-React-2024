-- CreateTable
CREATE TABLE `tbl_notice` (
    `i_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `i_item` VARCHAR(191) NOT NULL,
    `i_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`i_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
