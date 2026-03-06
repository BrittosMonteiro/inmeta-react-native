import { getWorkOrderById } from "@/src/services/work-orders/workOrdersService";
import { useQuery } from "@tanstack/react-query";

export function useGetWorkOrder(id: string) {
  const query = useQuery({
    queryKey: ["work-order", id],
    queryFn: () => getWorkOrderById(id),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
