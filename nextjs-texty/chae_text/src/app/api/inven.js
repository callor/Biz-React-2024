import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const results = await prisma.inventory_items.findMany({
        where: {
          visible: true,
        },
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: "Database connection error" });
    }
  } else {
    // 다른 HTTP 메소드 처리 (POST, PUT 등)
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
