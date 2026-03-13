import { z } from "zod";

export const CreateWorkOrderSchema = z.object({
  title: z
    .string({ error: "Título é obrigatório" })
    .min(1, "Título é obrigatório"),
  description: z
    .string({ error: "Descrição é obrigatória" })
    .min(1, "Descrição é obrigatória"),
  assignedTo: z
    .string({ error: "Responsável é obrigatório" })
    .min(1, "Responsável é obrigatório"),
});

export type CreateWorkOrderData = z.infer<typeof CreateWorkOrderSchema>;
