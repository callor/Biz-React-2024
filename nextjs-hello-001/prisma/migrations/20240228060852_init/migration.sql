-- CreateTable
CREATE TABLE `tbl_notice` (
    `m_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `m_author` VARCHAR(191) NOT NULL,
    `m_date` VARCHAR(191) NOT NULL,
    `m_time` VARCHAR(191) NOT NULL,
    `m_subject` VARCHAR(191) NOT NULL,
    `m_content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`m_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
