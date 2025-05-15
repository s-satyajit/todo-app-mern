import z from "zod";

export const todoCreateSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const todoUpdateSchema = z.object({
  id: z.string(),
});
