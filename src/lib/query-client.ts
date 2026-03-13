import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
