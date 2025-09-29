import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Email is required"),
  password: z.string().min(6).max(100),
});

export type LoginSchema = z.infer<typeof loginSchema>;
