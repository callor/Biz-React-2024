"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ORDER = prisma.tbl_orders;

export const selectAll = async () => {
  const result = await ORDER.findMany();
  return result;
};

export const findByCcode = async (c_code) => {
  const result = await ORDER.findMany({
    where: { o_ccode: c_code },
  });
  console.log("검색결과", result);
  return result;
};
