/*
  Warnings:

  - Added the required column `m_flag` to the `tbl_notice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_notice` ADD COLUMN `m_flag` VARCHAR(191) NOT NULL;
