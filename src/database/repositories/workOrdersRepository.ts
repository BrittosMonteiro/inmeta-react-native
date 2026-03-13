import { UpdateWorkOrderInput, WorkOrder } from "@/src/domain/dtos/work-order";
import { UpdateMode } from "realm";
import { v4 as uuid } from "uuid";
import { getRealm } from "..";

export async function getLocalWorkOrders(): Promise<WorkOrder[]> {
  const realm = await getRealm();

  const data = realm.objects<any>("WorkOrder").filtered("deleted == false");

  return data.map((item) => ({
    ...item,
  }));
}

export async function saveWorkOrders(workOrders: WorkOrder[]) {
  const realm = await getRealm();

  realm.write(() => {
    workOrders.forEach((order) => {
      realm.create(
        "WorkOrder",
        { ...order, syncStatus: "synced" },
        UpdateMode.Modified,
      );
    });
  });
}

export async function createLocalWorkOrder(data: {
  title: string;
  description: string;
  assignedTo: string;
}) {
  const realm = await getRealm();

  const id = uuid();
  const now = new Date().toISOString();

  const order: WorkOrder & { syncStatus: string } = {
    id,
    title: data.title,
    description: data.description,
    assignedTo: data.assignedTo,
    status: "Pending",
    createdAt: now,
    updatedAt: now,
    completed: false,
    deleted: false,
    syncStatus: "pendingCreate",
  };

  realm.write(() => {
    realm.create("WorkOrder", order);
  });

  return order;
}

export async function updateLocalWorkOrder(data: UpdateWorkOrderInput) {
  const realm = await getRealm();

  realm.write(() => {
    const order = realm.objectForPrimaryKey<any>("WorkOrder", data.id);

    if (!order) return;

    order.title = data.title;
    order.description = data.description;
    order.assignedTo = data.assignedTo;
    order.updatedAt = new Date().toISOString();

    if (order.syncStatus === "synced") {
      order.syncStatus = "pendingUpdate";
    }
  });
}

export async function deleteLocalWorkOrder(id: string) {
  const realm = await getRealm();

  realm.write(() => {
    const order: any = realm.objectForPrimaryKey("WorkOrder", id);

    if (!order) return;

    if (order.syncStatus === "pendingCreate") {
      realm.delete(order);
      return;
    }

    order.deleted = true;
    order.syncStatus = "pendingDelete";
  });
}

export async function applyRemoteSync(data: {
  created: any[];
  updated: any[];
  deleted: string[];
}) {
  const realm = await getRealm();

  realm.write(() => {
    data.created.forEach((order) => {
      realm.create(
        "WorkOrder",
        {
          ...order,
          syncStatus: "synced",
        },
        UpdateMode.Modified,
      );
    });

    data.updated.forEach((order) => {
      realm.create(
        "WorkOrder",
        {
          ...order,
          syncStatus: "synced",
        },
        UpdateMode.Modified,
      );
    });

    data.deleted.forEach((id) => {
      const record = realm.objectForPrimaryKey("WorkOrder", id);
      if (record) {
        realm.delete(record);
      }
    });
  });
}
