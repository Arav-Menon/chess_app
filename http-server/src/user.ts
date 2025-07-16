import { Router } from "express";
import { prisma } from "../../db/index";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";
import { signinValidation, signupValidation } from "../inputValidation";

export const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const result = signupValidation.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: result.error.flatten().fieldErrors,
      });
    }

    const { userName, email, password } = req.body;

    const existUser = await prisma.user.findMany({
      where: {
        email,
      },
    });

    if (existUser) {
      res.status(409).json({
        error: "User already exist",
        existUser: {
          userName,
          email,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const addUser = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      {
        id: addUser.id,
      },
      process.env.jwt_secret ?? ""
    );

    res.status(200).json({
      message: "You're now signin",
      token,
      addUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const result = signinValidation.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: result.error.flatten().fieldErrors,
      });
    }

    const { email, password } = req.body;

    const existUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existUser && (await bcrypt.compare(password, existUser.password))) {
      const token = jwt.sign(
        {
          id: existUser.id,
        },
        process.env.jwt_secret ?? ""
      );

      res.status(200).json({
        message: "You're now login",
        token,
      });
    }

    if (!existUser) {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
});
