import { CreateWorkOrderInput } from "@/app/work-order/manage-work-order/schema";
import { createWorkOrder } from "@/src/services/work-orders/workOrdersService";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export function useCreateWorkOrder() {
  const { data, error, isError, isPending, isSuccess, reset, mutateAsync } =
    useCreateWorkOrderMutation();

  const onSubmit = async (data: CreateWorkOrderInput) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
    }
  };

  return { onSubmit, data, error, isError, isPending, isSuccess, reset };
}

const useCreateWorkOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: async (data: CreateWorkOrderInput) =>
      await createWorkOrder(data),
    onSuccess: () => {
      router.push("/");
    },
  });

  return mutation;
};
