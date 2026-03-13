import { UpdateMode } from "realm";
import { getRealm } from "..";
import { SyncMetadataSchema } from "../schemas/SyncMetadataSchema";

const KEY = "workOrdersLastSync";

export async function getLastSyncAt(): Promise<string | null> {
  const realm = await getRealm();

  const metadata = realm.objectForPrimaryKey<SyncMetadataSchema>(
    "SyncMetadata",
    KEY,
  );

  return metadata ? metadata.value : null;
}

export async function setLastSyncAt(date: string) {
  const realm = await getRealm();

  realm.write(() => {
    realm.create(
      "SyncMetadata",
      {
        key: KEY,
        value: date,
      },
      UpdateMode.Modified,
    );
  });
}
