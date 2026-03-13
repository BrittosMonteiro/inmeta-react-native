import { Realm } from "@realm/react";

export class WorkOrderSchema extends Realm.Object {
  id!: string;
  title!: string;
  description!: string;
  status!: "Pending" | "In Progress" | "Completed";
  assignedTo!: string;
  createdAt!: string;
  updatedAt!: string;
  deletedAt?: string;
  completed!: boolean;
  deleted!: boolean;

  syncStatus!: "synced" | "pendingCreate" | "pendingUpdate";

  static schema: Realm.ObjectSchema = {
    name: "WorkOrder",
    primaryKey: "id",
    properties: {
      id: "string",
      title: "string",
      description: "string",
      status: "string",
      assignedTo: "string",
      createdAt: "string",
      updatedAt: "string",
      deletedAt: "string?",
      completed: "bool",
      deleted: "bool",

      syncStatus: {
        type: "string",
        default: "synced",
      },
    },
  };
}
