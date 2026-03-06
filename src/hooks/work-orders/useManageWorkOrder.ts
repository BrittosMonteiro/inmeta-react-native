import {
  CreateWorkOrderData,
  CreateWorkOrderSchema,
} from "@/app/work-order/manage-work-order/schema";
import { ManageWorkOrderInput } from "@/src/domain/dtos/work-order";
import {
  createWorkOrder,
  updateWorkOrder,
} from "@/src/services/work-orders/workOrdersService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useForm } from "react-hook-form";

export function useManageWorkOrder(initialData?: ManageWorkOrderInput) {
  const { data, error, isError, isPending, isSuccess, reset, mutateAsync } =
    useManageWorkOrderMutation();

  const onSubmit = async (data: ManageWorkOrderInput) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
    }
  };

  const form = useForm<CreateWorkOrderData>({
    resolver: zodResolver(CreateWorkOrderSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      assignedTo: initialData?.assignedTo || "",
    },
  });

  return { onSubmit, data, error, isError, isPending, isSuccess, reset, form };
}

const useManageWorkOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: async (data: ManageWorkOrderInput) => {
      if (data.id) {
        return await updateWorkOrder(data);
      }

      return await createWorkOrder(data);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  return mutation;
};
