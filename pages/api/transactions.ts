// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let where = {};

  if (req.query) {
    const { category, subCategory } = req?.query;

    if (category !== "undefined" && category !== "all") {
      where = {
        category: {
          name: {
            equals: category,
          },
        },
      };
    }

    if (subCategory !== "undefined" && subCategory !== "all") {
      where = {
        ...where,
        subCategory: {
          name: {
            equals: subCategory,
          },
        },
      };
    }
  }

  const transactions = await prisma.transaction.findMany({
    where,
    include: {
      category: {
        select: {
          name: true,
        },
      },
      subCategory: {
        select: {
          name: true,
          icon: true,
        },
      },
    },
  });

  return res.status(200).json(transactions);
}
