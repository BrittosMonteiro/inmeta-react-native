import { z } from "zod";

export const CreateWorkOrderSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  assignedTo: z.string().min(1),
});

export type CreateWorkOrderInput = z.infer<typeof CreateWorkOrderSchema>;
