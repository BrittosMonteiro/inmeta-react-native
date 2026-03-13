import { getRealm } from "@/src/database";
import {
  createWorkOrder,
  deleteWorkOrder,
  updateWorkOrder,
} from "@/src/services/work-orders/workOrdersService";

export async function pushLocalChanges() {
  const realm = await getRealm();

  const pending = realm
    .objects<any>("WorkOrder")
    .filtered('syncStatus != "synced"');

  for (const order of pending) {
    try {
      if (order.syncStatus === "pendingCreate") {
        const response = await createWorkOrder({
          title: order.title,
          description: order.description,
          assignedTo: order.assignedTo,
        });

        realm.write(() => {
          order.id = response.id;
          order.syncStatus = "synced";
        });

        continue;
      }

      if (order.syncStatus === "pendingUpdate") {
        await updateWorkOrder({
          id: order.id,
          title: order.title,
          description: order.description,
          assignedTo: order.assignedTo,
        });

        realm.write(() => {
          order.syncStatus = "synced";
        });

        continue;
      }

      if (order.syncStatus === "pendingDelete") {
        await deleteWorkOrder(order.id);

        realm.write(() => {
          realm.delete(order);
        });
      }
    } catch (error) {
      console.log("Erro enviando alteração local:", error);
    }
  }
}
