import { getLastSyncAt } from "@/src/database/repositories/syncMetadataRepository";

export async function fetchWorkOrdersSync() {
  const since = (await getLastSyncAt()) ?? "1970-01-01T00:00:00.000Z";

  const url = new URL(`${process.env.EXPO_PUBLIC_API_URL}/work-orders/sync`);

  if (since) {
    url.searchParams.append("since", since);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Erro ao sincronizar ordens");
  }

  return response.json();
}
