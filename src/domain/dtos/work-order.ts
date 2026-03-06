export type WorkOrder = {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
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

export type ManageWorkOrderInput = {
  id?: string;
  title: string;
  description: string;
  assignedTo: string;
};
