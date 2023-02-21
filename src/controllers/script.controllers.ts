import { Request, Response } from "express";
import { prisma } from "../connection/script.connect";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const saveEmployees = async (req: Request, res: Response) => {
  try {
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
    return res.status(200).json({
      POST: {
        data: {
          email: newUser.email,
          name: newUser.name,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const userById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        posts: true,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
