import { getWorkOrders } from "@/src/services/work-orders/workOrdersService";
import { useQuery } from "@tanstack/react-query";

export function useGetWorkOrdersList() {
  const query = useQuery({
    queryKey: ["work-orders"],
    queryFn: getWorkOrders,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
