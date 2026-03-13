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

export type CreateWorkOrderInput = {
  title: string;
  description: string;
  assignedTo: string;
};

export type UpdateWorkOrderInput = {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: "Pending" | "In Progress" | "Completed";
};

export type ManageWorkOrderInput = CreateWorkOrderInput | UpdateWorkOrderInput;
