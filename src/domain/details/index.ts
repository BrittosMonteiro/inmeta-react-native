import { ButtonVariants } from "@/src/components/ui/button/type";
import { WorkOrder } from "@/src/domain/dtos/work-order";

type NEXT_STEP_TYPE = Record<
  WorkOrder["status"],
  { status: WorkOrder["status"]; label: string; variant: ButtonVariants }
>;

export const NEXT_STEP: NEXT_STEP_TYPE = {
  Pending: { status: "In Progress", label: "Em progresso", variant: "warning" },
  "In Progress": {
    status: "Completed",
    label: "Concluir",
    variant: "success",
  },
  Completed: {
    status: "In Progress",
    label: "Em progresso",
    variant: "success",
  },
} as const;
