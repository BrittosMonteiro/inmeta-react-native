import { deleteLocalWorkOrder } from "@/src/database/repositories/workOrdersRepository";
import { deleteWorkOrder } from "@/src/services/work-orders/workOrdersService";
import { isOnline } from "@/src/utils/network/isOnline";
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
      const online = await isOnline();

      if (!online) {
        await deleteLocalWorkOrder(id);
        return;
      }

      await deleteWorkOrder(id);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  return mutation;
};
