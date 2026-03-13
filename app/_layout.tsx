import { useSyncOnReconnect } from "@/src/hooks/work-orders/useSyncOnReconnect";
import { queryClient } from "@/src/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  useSyncOnReconnect();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
