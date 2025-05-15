import { Schema, model } from "mongoose";

const todoSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  complete: { type: Boolean, required: true },
});

export const Todos = model("todo", todoSchema);
