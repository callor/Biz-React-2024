"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findByStNum = async (st_num) => {
  try {
    const result = await prisma.tbl_score.findMany({
      // where : {st_num : st_num}
      where: { s_stnum: st_num },
    });
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
