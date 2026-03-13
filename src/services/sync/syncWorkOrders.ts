import { setLastSyncAt } from "@/src/database/repositories/syncMetadataRepository";
import { applyRemoteSync } from "@/src/database/repositories/workOrdersRepository";
import { fetchWorkOrdersSync } from "../work-orders/workOrdersSyncService";
import { pushLocalChanges } from "./pushLocalChanges";

let syncing = false;

export async function syncWorkOrders() {
  if (syncing) return;

  syncing = true;

  try {
    await pushLocalChanges();

    const remoteChanges = await fetchWorkOrdersSync();

    await applyRemoteSync(remoteChanges);

    await setLastSyncAt(new Date().toISOString());
  } catch (error) {
    console.log("Erro na sincronização", error);
  } finally {
    syncing = false;
  }
}
