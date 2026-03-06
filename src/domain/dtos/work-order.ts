export type WorkOrder = {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedTo: string;
  createdAt: string; // ISODate
  updatedAt: string; // ISODate
  deletedAt?: string; // ISODate
  completed: boolean;
  deleted: boolean;
};

export type WorkOrderCard = Pick<
  WorkOrder,
  "id" | "title" | "description" | "status" | "assignedTo"
>;

export type WorkOrderDetails = Pick<
  WorkOrder,
  | "id"
  | "title"
  | "description"
  | "status"
  | "assignedTo"
  | "createdAt"
  | "updatedAt"
>;
