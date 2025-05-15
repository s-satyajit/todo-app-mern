import express from "express";
import { todoCreateSchema, todoUpdateSchema } from "./types.js";
import { Todos } from "./models/models.js";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();

router.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = todoCreateSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: `You entered invalid input` });
    return;
  }

  const { title, description } = parsedPayload.data;

  await Todos.create({
    title,
    description,
    complete: false,
  });
  res.json({ msg: `Task created successfully!` });
});

router.get("/todos", async (req, res) => {
  const todo = await Todos.find();
  res.json({ todo });
});

router.put("/update-todo", async (req, res) => {
  const updatePayload = req.body;
  const parsedUpdatePayload = todoUpdateSchema.safeParse(updatePayload);
  if (!parsedUpdatePayload.success) {
    res.status(411).json({ msg: `You entered invalid input` });
    return;
  }

  const { id } = parsedUpdatePayload.data;

  await Todos.updateOne(
    {
      _id: id,
    },
    {
      complete: true,
    }
  );

  res.json({ msg: `Task marked as complete` });
});

export default router;
