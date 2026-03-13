import { syncWorkOrders } from "@/src/services/sync/syncWorkOrders";
import NetInfo from "@react-native-community/netinfo";
import { useEffect } from "react";

export function useSyncOnReconnect() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isOnline = state.isConnected && state.isInternetReachable;

      if (isOnline) {
        syncWorkOrders();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
}
