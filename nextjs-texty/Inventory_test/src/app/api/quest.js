import { PrismaClient } from "@prisma/client";

const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const quest = await DB.tbl_quest.findMany();
    await DB.$disconnect();
    return quest;
  } catch (error) {
    console.error("Error selecting all data:", error);
    return null;
  }
};

const createQuest = async (data) => {
  try {
    await DB.tbl_quest.create({ data: data });
    console.log("Data created successfully");
    return { success: true };
  } catch (error) {
    console.error("Error creating data:", error);
    return { success: false, error: error.message };
  }
};

export { createQuest, selectAll };
