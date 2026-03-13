import { Realm } from "realm";

export class SyncMetadataSchema extends Realm.Object {
  key!: string;
  value!: string;

  static schema: Realm.ObjectSchema = {
    name: "SyncMetadata",
    primaryKey: "key",
    properties: {
      key: "string",
      value: "string",
    },
  };
}
