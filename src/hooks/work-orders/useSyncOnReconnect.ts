import { syncWorkOrders } from "@/src/services/sync/syncWorkOrders";
import * as Network from "expo-network";
import { useEffect } from "react";

export function useSyncOnReconnect() {
  useEffect(() => {
    let interval: NodeJS.Timeout;

    async function checkConnection() {
      const state = await Network.getNetworkStateAsync();

      if (state.isConnected && state.isInternetReachable) {
        await syncWorkOrders();
      }
    }

    interval = setInterval(checkConnection, 5000);

    return () => clearInterval(interval);
  }, []);
}
