-- CreateTable
CREATE TABLE `tbl_quest` (
    `seq` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,
    `answer1` VARCHAR(191) NOT NULL,
    `answer2` VARCHAR(191) NOT NULL,
    `answer3` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
