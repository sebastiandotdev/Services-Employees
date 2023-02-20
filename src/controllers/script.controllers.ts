import { Request, Response } from "express";
import { prisma } from "../connection/script.connect";

export const getEmployees = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  res.json(users);
};

export const saveEmployees = async (req: Request, res: Response) => {
  const {
    email,
    name,
    post: { title, content },
  } = req.body;

  const newUser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      posts: {
        create: {
          title: title,
          content: content,
        },
      },
    },
  });
  res.json({
    POST: {
      data: {
        ...newUser,
      },
    },
  });
};
