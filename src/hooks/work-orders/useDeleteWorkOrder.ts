import { deleteWorkOrder } from "@/src/services/work-orders/workOrdersService";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export function useDeleteWorkOrder() {
  const { data, isError, isPending, isSuccess, reset, mutateAsync } =
    useDeleteWorkOrderMutation();

  const onDelete = async (id: string) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      console.error("Erro ao deletar ordem de serviço:", error);
    }
  };

  return { onDelete, data, isError, isPending, isSuccess, reset };
}

const useDeleteWorkOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await deleteWorkOrder(id);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  return mutation;
};
