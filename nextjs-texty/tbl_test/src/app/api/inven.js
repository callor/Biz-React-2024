import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const inven = await DB.tbl_inven.findMany();
    await DB.$disconnect();
    return inven;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createInven = async (data) => {
  console.log(data);
  await DB.tbl_inven.create({ data: data });
};
export { createInven, selectAll };
