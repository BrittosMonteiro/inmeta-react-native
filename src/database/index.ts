import Realm from "realm";
import { SyncMetadataSchema } from "./schemas/SyncMetadataSchema";
import { WorkOrderSchema } from "./schemas/WorkOrderSchema";

let realmInstance: Realm | null = null;

export async function getRealm() {
  if (!realmInstance) {
    realmInstance = await Realm.open({
      schema: [WorkOrderSchema, SyncMetadataSchema],
      schemaVersion: 1,
      deleteRealmIfMigrationNeeded: true,
    });
  }

  return realmInstance;
}

export async function resetRealm() {
  const realm = await getRealm();
  realm.write(() => {
    realm.deleteAll();
  });
}
