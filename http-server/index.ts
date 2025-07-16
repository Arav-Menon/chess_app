import express from "express";
import { userRouter } from "./src/user";

const app =  express();

const port = 8000;
app.use(express());

app.use("/user", userRouter);

app.listen(console.log(`Server is started on ${port}`));