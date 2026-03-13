import {
  CreateWorkOrderData,
  CreateWorkOrderSchema,
} from "@/src/app/work-order/manage-work-order/schema";
import {
  createLocalWorkOrder,
  updateLocalWorkOrder,
} from "@/src/database/repositories/workOrdersRepository";
import { ManageWorkOrderInput } from "@/src/domain/dtos/work-order";
import {
  createWorkOrder,
  updateWorkOrder,
} from "@/src/services/work-orders/workOrdersService";
import { isOnline } from "@/src/utils/network/isOnline";
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
      console.error(error);
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
      const online = await isOnline();

      if ("id" in data && data.id) {
        return online ? updateWorkOrder(data) : updateLocalWorkOrder(data);
      }

      return online ? createWorkOrder(data) : createLocalWorkOrder(data);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  return mutation;
};
